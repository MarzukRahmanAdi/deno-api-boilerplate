import { Router } from "https://deno.land/x/oak/mod.ts";
import index from "../handlers/index.ts";

const router = new Router();

router.get("/", index);
router.get("/:id", (context) => {
    context.response.body = {message :"hello " + context.params.id};
  });

export default router;
