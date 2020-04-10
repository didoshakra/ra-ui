//Вертає вміст файлу переданого в параметрі fname
//Якщо заданий файл не знайдено, то бере зміст першого файлу в папці
export default function mapThemes(req, fname) {
  // перший файл в папці,як default
  var themes = req(req.keys()[0]);
  //forEach-перебір масиву
  req.keys().forEach((filename) => {
    if (filename === fname) {
      themes = req(filename);
    }
  });
  return themes;
}
