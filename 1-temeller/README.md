## State Yönetimi

-State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özelliklerdir.
-Prop Driling: Bileşenlerin yukarıdan aşağıya veri taşımasıdır.
-contex: Uygulamadaki state'i bütün bileşenler tarafından erişilebilen ve oluşturduğumuz merkezlerden yönettiğimiz state yönetim aracıdır. 

## Neden Contex Yerine Redux

-Kod tekrarını önler 
-Performansı daha iyidir.
Bileşenler içerisindeki karışıklığı azaltır.
Hata ayıklama daha kolaydır.
Orta ve Büyük ölçekli projelerde state yönetimini daha kolay hale getirir. 

## Kütüphaler 

- bootstrap
- json-server
- react-redux
- redux
- uuid

## Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu 

2. Reducer: Aksiyondan aldığı talimata(emir) göre store'da tutulan state'in nasıl değişeceğine karar veren fonksiyondur.

3. Action (Emir,talimat): Store'daki state'i güncellemek için reducera gönderdiğimiz nesnedir.

-- Action iki değerli bir nesne dönderir:
-type(zorunlu): Actionun görevini tanımlayan bir string değerdir.
-payload(Opsiyonel): Actionun verisidir.
