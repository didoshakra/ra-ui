//Вертає вміст файлу переданого в параметрі fname
export default function mapTranslations(req, fname) {
  var translations = {};
  //forEach-перебір масиву
  req.keys().forEach(filename => {
    if (filename === fname) {
      translations = req(filename);
    }
  });
  return translations;
}
