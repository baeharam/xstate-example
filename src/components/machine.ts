import { createMachine } from "xstate";

enum Event {
  INPUT_KEYBOARD = "키보드 입력",
  CLICK_MOUSE = "마우스 클릭",
}

type EventType =
  | { type: typeof Event.INPUT_KEYBOARD; value: string }
  | { type: typeof Event.CLICK_MOUSE };

enum State {
  IDLE = "초기",
  MOVE_MODE = "이동모드",
  INPUT_MODE = "입력모드",
}

export const boardMachine = createMachine({
  id: "boardMachine",
  schema: {
    context: {},
    events: {} as EventType,
  },
  initial: State.IDLE,
  states: {
    [State.IDLE]: {
      on: {
        [Event.CLICK_MOUSE]: State.MOVE_MODE,
      },
    },
    [State.MOVE_MODE]: {},
    [State.INPUT_MODE]: {},
  },
});
