import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "message" });
});

router.post("/", (req, res) => {
  const { body } = req;
  console.log(body);
  res.status(200).json({ message: "create with success" });
});

export default router;
