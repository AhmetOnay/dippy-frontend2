export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public cookingTime: number;
  public cookingSteps: string;
  public levelId: number;
  public nationalityId: number;
  public userId: number;
  public visibility: boolean;

  constructor(
    id: number,
    name: string,
    description: string,
    cookingTime: number,
    cookingSteps: string,
    levelId: number,
    nationalityId: number,
    userId: number,
    visibility: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cookingTime = cookingTime;
    this.cookingSteps = cookingSteps;
    this.levelId = levelId;
    this.nationalityId = nationalityId;
    this.userId = userId;
    this.visibility = visibility;
  }
}
