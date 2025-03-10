/* eslint-disable no-useless-escape */
import type { IFormField } from "../types";
import { getResources } from "./getAlgoResources";
import isPrivateIP from "private-ip";

const PRECODE_REGEX = /[a-zA-Z0-9]{32}$/;
const ALPHA_NUMS_ONLY_REGEX = /^\w+$/;
// const IP_REGEX = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}\/16$/;
// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
// const UNIX_PATH_REGEX = /^\/([A-z0-9-_+]+\/)*([A-z0-9]+)$/;
const ALPHA_ONLY_REGEX = /[A-Za-z]/; // Alphabets only
const NAME_REGEX = /^[^0-9][a-zA-Z0-9]+$/; // Alphabets + digits + not start with digit
const ALPHANUMERIC_UNDERSCORE_REGEX = /^[^0-9_\s][a-zA-Z0-9_]+$/; // Alphabets + digits + underscore + not start with digit
const PROFILE_NAME_REGEX = /^[\w\-\s]+$/;
// eslint-disable-next-line no-useless-escape
const URL_REGEX = /^((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/;
const WHITE_SPACE_REGEX = /^\S*$/;
const NUM_REGEX = /^[1-9](\d?|\d+)$/;
const MNEMONICS_LENGTH_REGEX = /^([a-zA-Z]+\s){24}[a-zA-Z]+$/;

// const SSH_REGEX = /ssh-rsa AAAA[0-9A-Za-z+/]+[=]{0,3}( [^@]+@[^@]+)?/;

export const SSH_REGEX =
  /^(sk-)?(ssh-rsa AAAAB3NzaC1yc2|ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNT|ecdsa-sha2-nistp384 AAAAE2VjZHNhLXNoYTItbmlzdHAzODQAAAAIbmlzdHAzOD|ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1Mj|ssh-ed25519 AAAAC3NzaC1lZDI1NTE5|ssh-dss AAAAB3NzaC1kc3)[0-9A-Za-z+/]+[=]{0,3}( .*)?$/;

const ENDPOINT_REGEX = /^((?:wss):\/\/)(([a-z0-9-]+[.][a-z]){1,3}([a-z-/]?[:^\w\s]){1,10})$/;

// prettier-ignore
export default function validateName(name: string): string | void {
  if (name.length < 2) return "Name must be at least 2 characters";
  if (!ALPHA_ONLY_REGEX.test(name[0])) return "Name can't start with a number, a non-alphanumeric character or a whitespace.";
  if (!NAME_REGEX.test(name)) return "Name can only include alphanumeric characters.";
  if (name.length > 15) return "Name must be at most 15 characters.";
}
export function validateMastodonAdminEmail(email: string): string | void {
  if (email == "") return "Email is required";
  if (email.slice(0, 6).toLowerCase() == "admin@") return "The email is reserved, use different email.";
  return validateEmail(email);
}
export function validateMastodonAdminUsername(username: string): string | void {
  if (username.length < 5) return "username must be at least 5 characters";
  if (!ALPHA_ONLY_REGEX.test(username[0]))
    return "username can't start with a number, a non-alphanumeric character or a whitespace.";
  if (!NAME_REGEX.test(username)) return "username can only include alphanumeric characters.";
  if (username.toLowerCase() == "admin") return "The username is reserved, use different username.";
}
export function validateMnemonics(mnemonics: string): string | void {
  if (!mnemonics.length) return "Mnemonics required";
  if (!ALPHA_ONLY_REGEX.test(mnemonics))
    return "Mnemonics are can only be composed of a non-alphanumeric character or a whitespace.";
}

export function validateMnemonicsAlgorand(mnemonics: string): string | void {
  if (!mnemonics.length) return "Mnemonics required";
  if (!MNEMONICS_LENGTH_REGEX.test(mnemonics))
    return "Mnemonics should be 25 words and should contain alphabetic characters with only one space between the words.";
}
export function validateEmail(email: string): string | void {
  if (!EMAIL_REGEX.test(email)) return "Invalid email format.";
}

export function validateRequiredEmail(email: string): string | void {
  if (email == "") return "Email is required";
  return validateEmail(email);
}
export function validateEndpoint(value: string): string | void {
  if (value.trim() == "") return "Endpoint is required.";
  if (!ENDPOINT_REGEX.test(value)) return "Invalid endpoint format";
}

export function validateOptionalEmail(email: string): string | void {
  if (email == "") return null;
  if (!EMAIL_REGEX.test(email)) return "Invalid email format.";
}

export function validateOptionalPassword(value: string): string | void {
  if (value == "") return null;
  if (value.length < 6) return "Password must be at least 6 characters";
  if (value.length > 15) return "Password must be less than 15 characters";
}

export function isInvalid(fields: IFormField[]) {
  return fields.reduce((res, { invalid }) => res || invalid, false);
}

export function validateMemory(value: number): string | void {
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "Memory must be a valid number.";
  value = +value;
  if (+value.toFixed(0) !== value) return "Memory must be a valid integer.";
  if (value < 256) return "Minimum allowed memory is 256 MB.";
  if (value > 256 * 1024) return "Maximum allowed memory is 256 GB.";
}

export function validateNPMemory(value: number): string | void {
  if (value < 8192) return "Minimum allowed memory is 8192 MB.";
  return validateMemory(value);
}

export function validateKubernetesMemory(value: number): string | void {
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "Memory must be a valid number.";
  value = +value;
  if (+value.toFixed(0) !== value) return "Memory must be a valid integer.";
  if (value < 1024) return "Minimum allowed memory is 1024 MB.";
  if (value > 256 * 1024) return "Maximum allowed memory is 256 GB.";
}

export function validateDisk(value: number): string | void {
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "Disk size must be a valid number.";
  value = +value;
  if (+value.toFixed(0) !== value) return "Disk size must be a valid integer.";
  if (value < 1) return "Minimum allowed disk size is 1 GB.";
  if (value > 10000) return "Maximum allowed disk size is 10000 GB.";
}

export function validateCpu(value: number): string | void {
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "CPU must be a valid number.";
  value = +value;
  if (+value.toFixed(0) !== value) return "CPU cores must be a valid integer.";
  if (value < 1) return "Minimum allowed CPU cores is 1.";
  if (value > 32) return "Maximum allowed CPU cores is 32.";
}

export function validateNPCpu(value: number): string | void {
  if (value < 8) return "Minimum allowed CPU cores is 8.";
  return validateCpu(value);
}

export function validatePortNumber(value: string): string | void {
  if (value === "") return null;
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "Port must be a valid number.";
  const port = +value;
  if (port.toFixed(0) !== value) return "Port must be a valid integer.";
  if (port < 1) return "Minimum allowed port is 1.";
  if (port > 65535) return "Maximum allowed port is 65535.";
}

export function validateRequiredPortNumber(value: string): string | void {
  if (value === "") return "Port is required.";
  return validatePortNumber(value);
}

export function validatePreCode(value: string): string | void {
  if (value === "") return "Presearch registration code is required.";
  if (!PRECODE_REGEX.test(value)) return "Invalid presearch registration code.";
  if (value.length !== 32) return "Presearch registration code must be 32 characters long.";
}

export function validateProfileName(name: string): string | void {
  if (name.length < 2) return "Name must be at least 2 characters.";
  if (!ALPHA_ONLY_REGEX.test(name[0]))
    return "Name can't start with a number, a non-alphanumeric character or a whitespace.";
  if (!PROFILE_NAME_REGEX.test(name)) return "Name can only include alphanumeric characters and spaces.";
  if (name.length > 15) return "Name must be at most 15 characters.";
}

export function validatePassword(value: string): string | void {
  if (value.length < 6) return "Password must be at least 6 characters";
  if (value.length > 15) return "Password must be less than 15 characters";
}

export function validateRequiredPassword(value: string): string | void {
  if (value == "") return "Password is required";
  return validatePassword(value);
}

export function validateToken(token: string): string | void {
  if (token.length < 6) return "Token must be at least 6 characters";
  if (!ALPHA_NUMS_ONLY_REGEX.test(token)) return "Token can't contain any characters other than alphabets and numbers.";
  if (token.length > 15) return "Token must be at most 15 characters";
}

export function validateIPRange(value: string): string | void {
  const IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
  const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
  const ipRegex = new RegExp(`^${IPv4AddressFormat}/(1[6-9]|2[0-9]|3[0-2])$`);
  if (!ipRegex.test(value)) {
    return "Invalid IP range. IP address in CIDR format xxx.xx.xx.xx/16";
  }
}

export function validatePrivateIPRange(value: string): string | void {
  if (value.split(".").length !== 4) return "Invalid private IP range.";
  if (!value.includes("/")) return "IP range must contain subnet";
  if (value.split("/")[1] !== "16") return "Subnet must be /16";
  if (!isPrivateIP(value.split("/")[0])) return "Invalid private IP range.";
}

export function validateMountPoint(value: string): string | void {
  if (value === "") return "Mount point is required";
  value = value.trim();
  if (value === "" || value === "/" || !value.startsWith("/"))
    return "Mount Point must start '/' and can't be positioned at root('/')";
}

export function validateDiskName(value: string): string | void {
  if (value === "") return "Disk Name is required";
  if (!ALPHA_ONLY_REGEX.test(value[0]))
    return "Key can't start with a number, a non-alphanumeric character or a whitespace";
  if (!ALPHANUMERIC_UNDERSCORE_REGEX.test(value)) return "Invalid disk name";
  if (value.length > 15) return "Name must be at most 15 characters";
}

export function validateKey(value: string): string | void {
  if (!ALPHA_ONLY_REGEX.test(value[0]))
    return "Key can't start with a number, a non-alphanumeric character or a whitespace";
  if (!ALPHANUMERIC_UNDERSCORE_REGEX.test(value)) return "Invalid key format ";
  if (value.length > 128) return "key must be less than 128 characters";
  if (value === "") return "Key is required";
}

export function validateKeyValue(value: string): string | void {
  if (value === "") return "Key Value is required";
}

export function validateFlistvalue(value: string): string | void {
  if (!WHITE_SPACE_REGEX.test(value)) return "Please remove white spaces from flist";
  if (value === "") return "Flist Value is required";
  if (!URL_REGEX.test(value)) return "Invalid flist";
}

export function validateSSH(value: string): string | void {
  if (!SSH_REGEX.test(value)) return "Please enter a valid SSH key";
  if (value === "") return "SSH Value is required";
}

export function validateEntryPoint(value: string): string | void {
  if (value === "") return "Entry point is required";
}

export function validateStakeAmount(value: string): string | void {
  if (value === "") return "Stake amount is required";
  if (+value < 1e-5 || +value <= 0 || value.startsWith("0")) return "Amount must be positive";
  if (isNaN(+value) || value.startsWith("+") || value.includes("e")) return "Stake amount must be a number.";
}

export function validateBSCAddress(value: string) {
  if (value === "") return "Ethereum address is required";
  if (value.length != 42) return "Address length must be 42";
  if (!value.startsWith("0x")) return "Address must start with 0x";
  if (!/^(0x)?[0-9a-f]{40}$/i.test(value)) return "Address must consist only of valid hex characters after 0x";
}

export function validateBSCPrivateKey(value: string): string | void {
  if (value === "") return "Private key is required";
  if (value.length != 64) return "Private key length must be 64";
  if (!/^[0-9a-f]{64}$/i.test(value)) return "Private key must consist only of valid hex characters.";
}

export function validateethereumRpc(value: string): string | void {
  if (value != "" && !URL_REGEX.test(value)) return "Invalid url format";
}

export function validateAlgoCpu(value: string, net, type): string | void {
  const [cpu] = getResources(net, type);
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "CPU must be a valid number.";
  if (+value < cpu) return `Minimum CPU for this deployment is ${cpu}.`;
  if (+value > 32) return "Maximum allowed CPU cores is 32.";
}
export function validateAlgoMemory(value: string, net, type): string | void {
  const [memory] = getResources(net, type);
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "Memory must be a valid number.";
  if (+value < memory) return `Minimum Memory for this deployment is ${memory}.`;
  if (+value > 256 * 1024) return "Maximum allowed memory is 256 GB.";
}
export function validateAlgoStorage(value: string, net, type): string | void {
  const [storage] = getResources(net, type);
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "Storage must be a valid number.";
  if (+value < storage) return `Minimum Storage for this deployment is ${storage}`;
  if (+value > storage + 200) return `Maximum Storage for this deployment is ${storage + 200}.`;
}

export function validateQsfsSecret(value: string): string | void {
  if (!value.length) return `ZDB password is required`;
}

export function validateZdbCount(value: number): string | void {
  if (!NUM_REGEX.test(value.toString()) || isNaN(+value)) return "ZDB count must be a valid number.";
  else if (value < 3) return `Minimum allowed ZDB is 3 ZDBs`;
}
