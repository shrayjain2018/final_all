import { MessageComponent } from './message.component';

describe("Test Parent", () => {
  let msgComponent: MessageComponent;

  it("toggle test", () => {

    const msgComponent = new MessageComponent();

    expect(msgComponent.doToggle()).toBe(true, "One toggle to be true");
    

    expect(msgComponent.doToggle()).toBe(false, "Another toggle to be false");
    

    expect(msgComponent.doToggle()).toBe(true, "One toggle to be true");
    

    expect(msgComponent.doToggle()).toBe(false, "Another toggle to be false");
    

  });

});
