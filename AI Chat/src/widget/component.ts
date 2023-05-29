import { ComponentInterface , User , AiBot } from '../fork'

export default abstract class Component implements ComponentInterface {
    constructor(
      public id: string,
      public shape: { attributes: Partial<CSSStyleDeclaration> },
      public locationLeft: number,
      public locationTop: number,
      public width: number,
      public height: number,
      public content: HTMLElement,
      public user?: User,
      public aiBot?: AiBot
    ) {}
  }