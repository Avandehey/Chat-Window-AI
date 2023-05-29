import { ComponentInterface , Component } from '../fork'

export default class Box {
    private _widgets: ComponentInterface[] = [];
    private parent: HTMLElement;
  
    constructor(parent: HTMLElement) {
      this.parent = parent;
      this.parent.innerHTML = '';
      this.parent.id = 'box';
  
      const canvasStyle: Partial<CSSStyleDeclaration> = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaf2f8',
        height: '100vh',
        width: '100%',
      };
  
      Object.assign(this.parent.style, canvasStyle);
    }
  
    public get widgets(): ComponentInterface[] {
      return this._widgets;
    }
  
    public set widgets(value: ComponentInterface[]) {
      this._widgets = value;
    }
  
    public addWidget(widget: ComponentInterface): void {
      this.widgets.push(widget);
      this.buildWidget(widget);
    }
  
    public removeWidget(widget: ComponentInterface): void {
      const index = this.widgets.findIndex((w) => w === widget);
      if (index !== -1) {
        this.widgets.splice(index, 1);
        const element = document.getElementById(widget.id.toString());
        if (element) {
          element.remove();
        }
      }
    }
  
    private initializeElement(widget: ComponentInterface): HTMLDivElement {
      const div = document.createElement('div');
      div.id = widget.id.toString();
  
      const boxStyle: Partial<CSSStyleDeclaration> = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '200px',
        backgroundColor: '#f2f2f2',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
      };
      Object.assign(div.style, boxStyle);
      return div;
    }
  
    private buildShape(widget: ComponentInterface, div: HTMLDivElement): void {
      Object.assign(div.style, widget.shape.attributes);
    }
  
    private placeShape(widget: Component, div: HTMLDivElement): void {
      const locationStyle: Partial<CSSStyleDeclaration> = {
        gridColumnStart: widget.locationLeft.toString(),
        gridColumnEnd: `span ${widget.width}`,
        gridRowStart: widget.locationTop.toString(),
        gridRowEnd: `span ${widget.height}`,
      };
      Object.assign(div.style, locationStyle);
    }
  
    private buildWidget(widget: Component): void {
      const div = this.initializeElement(widget);
      this.buildShape(widget, div);
      div.appendChild(widget.content);
      this.placeShape(widget, div);
      this.parent.appendChild(div);
    }
  }