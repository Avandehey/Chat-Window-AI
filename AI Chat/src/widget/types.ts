export type GridUnit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface ComponentInterface {
    id: string;
    shape: { attributes: Partial<CSSStyleDeclaration> };
    locationLeft: number;
    locationTop: number;
    width: number;
    height: number;
    content: HTMLElement;
  }