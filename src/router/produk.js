const express = require("express");
const router = express.Router();
const Controller = require("../controller/produkC");
const { auth } = require("../middleware/auth");

// router pinjaman
router.post("/pinjaman", Controller.createDataPinjaman);
router.get("/pinjaman", auth, Controller.getAllDataPijaman);
router.delete("/pinjaman", Controller.deleteDataPinjaman);

// router simpanan
router.post("/simpanan", Controller.createDataSimpanan);
router.get("/simpanan", auth, Controller.getAlldataSimpanan);
router.post(
  "/simpanan/updateSimpanan",
  auth,
  Controller.updateKategoriSimpanan
);
router.delete("/simpanan", Controller.deleteDataSimpanan);

// router kemitraan
router.post("/kemitraan", Controller.creatDataKemitraan);
router.get("/kemitraan", auth, Controller.getAllDataKemitraan);
router.delete("/kemitraan", Controller.deleteDataKemitraan);

// router SDB
router.post("/SDB", Controller.creatDataSDB);
router.get("/SDB", auth, Controller.getAllDataSDB);
router.delete("/SDB", Controller.deleteDataSDB);

// router pengaduan nasabah
router.post("/pengaduan", Controller.createDataPengaduan);
router.get("/pengaduan", auth, Controller.getALLDataPengaduan);
router.delete("/pengaduan", Controller.deleteDataPengaduan);

module.exports = router;
