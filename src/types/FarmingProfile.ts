export default class FarmingProfile {
  public constructor(
    public name: string = "DIY",
    public memory: number = 0,
    public cpu: number = 0,
    public hdd: number = 0,
    public ssd: number = 0,
    public price: number = 0,
    public priceAfter5Years: number = 0,
    public powerUtilization: number = 40,
    public powerCost: number = 0.15,
    public certified: boolean = true,
    public publicIp: boolean = false
  ) {}

  public get cu(): number {
    const { memory, cpu } = this;

    const x = (memory - 1) / 4;
    const y = (cpu * 4) / 2;
    return Math.min(x, y);
  }

  public get nu(): number {
    return this.cu * 30;
  }

  public get su(): number {
    const { hdd, ssd } = this;

    const x = hdd / 1200;
    const y = (ssd / 300) * 0.8;
    return x + y;
  }

  public get averageTokenPrice(): number {
    const { price, priceAfter5Years } = this;
    return (price + priceAfter5Years) / 2;
  }

  public get rewardPerCu(): number {
    return 2.4;
  }

  public get rewardPerSu(): number {
    return 1.5;
  }

  public get rewardPerNu(): number {
    return 0.03;
  }

  private get tftRewardPer(): number {
    return (this.certified ? 1 : 0) * 0.25 + 1;
  }

  public get tftRewardPerCu(): number {
    const { rewardPerCu, price, tftRewardPer } = this;
    return (rewardPerCu / price) * tftRewardPer;
  }

  public get tftRewardPerSu(): number {
    const { rewardPerSu, price, tftRewardPer } = this;
    return (rewardPerSu / price) * tftRewardPer;
  }

  public get tftRewardPerNu(): number {
    const { rewardPerNu, price } = this;
    return rewardPerNu / price;
  }

  public get cuFarmingRewardInTft(): number {
    const { cu, tftRewardPerCu } = this;
    return tftRewardPerCu * cu;
  }

  public get suFarmingRewardInTft(): number {
    const { su, tftRewardPerSu } = this;
    return tftRewardPerSu * su;
  }

  public get nuFarmingRewardInTft(): number {
    const { nu, tftRewardPerNu, publicIp } = this;
    return publicIp ? tftRewardPerNu * nu : 0;
  }

  public get totalFarmingRewardInTft(): number {
    const { cuFarmingRewardInTft, suFarmingRewardInTft, nuFarmingRewardInTft } =
      this;
    return cuFarmingRewardInTft + suFarmingRewardInTft + nuFarmingRewardInTft;
  }

  /* help functions for charts */
  public getTotalReward(current_price: number): number {
    const { certified, powerUtilization, powerCost, publicIp, price } = this;
    const certifiedValue = 1 + (certified ? 1 : 0) * 0.25;

    const cu = (2.4 / price) * certifiedValue;
    const su = (1.5 / price) * certifiedValue;
    const nu = publicIp ? 0.03 / price : 0;

    const total = (cu + su + nu) * current_price;
    return total - powerUtilization * powerCost;
  }
}