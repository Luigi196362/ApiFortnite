const {Router} = require ('express');
const controllers = require ('../controllers');

const router = Router();

router.get('/',(req, res) => res.send ('Welcome'))

router.post ('/Fortnite',controllers.creatImagen);
router.get ('/Fortnite',controllers.getAllImagen);

module.exports = router;

