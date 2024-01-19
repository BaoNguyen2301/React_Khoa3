import { type } from "@testing-library/user-event/dist/type"
import { add_comment } from "../Stypes/FakeBookType"

export const addCommentAction = (userComment) => ({
  type: add_comment,
  userComment
})
