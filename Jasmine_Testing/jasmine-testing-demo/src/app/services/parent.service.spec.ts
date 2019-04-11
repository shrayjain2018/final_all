import { ParentService } from './parent.service';
import { ChildService } from './child.service';


describe("Test Parent", () => {
  let parentSvc: ParentService;

  it("parent hello from child hello", () => {
    parentSvc = new ParentService(new ChildService);
    expect(parentSvc.sendParent()).toEqual("Hello From Child");
  });

});