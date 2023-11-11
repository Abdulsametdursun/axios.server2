# Vite Projesi icin Adimlar

- npm creat vite > yeni bir klasor icerisine react olusturur
- npm creat vite . > terminalin bulundugu konumda olusturur

- npm i > node modulesleri indirmek icin kullanilir
- npm run dev > proje baslatmak icin kullanilir

# Json-Server

- db.json dosyasinin ana dosya icinde olamasina dikkat
- Kendi PC mizde calisan bir API olusturmaya yarar
- Olusturdugumuz db.json icerisindeki verileri izler
- Her bir dizi icin endpoint olusturur
- Bu endpointler yapilan istekleri izler
- Istekler sonucunda olan degisim db.json dosyasina kaydedilir

# Faydalari

- Hizli prototipleme: Backend olusturulmadan once uygulmanin temel ozelliklerini olusturmak icin kullanilir
- Kendimizin gelistirmek icin yazdigimiz uygulamalarin backend ihtiyacinin karsilar

# Json-Server Operatorleri

- Filtrelemelerde kullanabilecegimiz operatorler:
- gte > greater than or equal
- lte > less than or equal
- ne > not equal

- degisken isimini sonuna eklenir
- price_gte = 100

# Axios

## NOT: Projede json-server varsa projeyi calistirmadan once server calistirilmalidir (npm run server). Sonra proje baska bir terminalden calistirilir (npm run dev)

- HTTP istekleri icin modern cozum
- Yerlisik degil paketini indermek gerekiyor
- npm i axios
