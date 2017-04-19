import { NgSvgMapEuropePage } from './app.po';

describe('ng-svg-map-europe App', () => {
  let page: NgSvgMapEuropePage;

  beforeEach(() => {
    page = new NgSvgMapEuropePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
