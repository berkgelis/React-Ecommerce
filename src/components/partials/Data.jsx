import { createContext, useContext, useState } from "react"

const DataContext = createContext()

const data = [
    { id: 1, brand: "MAGIC LIFE", title: " 20 Lt Ince Tane Kokusuz Naturel Beyaz Benton..", price: "259.99₺", src: "https://cdn.dsmcdn.com/ty730/product/media/images/20230213/22/280477889/555232126/1/1_org_zoom.jpg" },
    { id: 2, brand: "BioFeline", title: " Plus B For Cats 50ml (KEDİLER İÇİN TÜYLÜ Bİ...", price: "159.75₺", src: "https://cdn.dsmcdn.com/ty1004/product/media/images/prod/SPM/PIM/20230924/05/63c6eb5b-e04f-3234-ac15-3ae897329ac9/1_org_zoom.jpg" },
    { id: 3, brand: "Pro Line", title: " Proline Ekonomik Dev Boy - Marsilya Kokulu Inc...", price: "129.99₺", src: "https://cdn.dsmcdn.com/ty483/product/media/images/20220719/13/145571124/524042355/1/1_org_zoom.jpg" },
    { id: 4, brand: "Careshop", title: " Abso Yıkanabilir Emici Tuvalet Eğitim Köpek P...", price: "59.50₺", src: "https://cdn.dsmcdn.com/ty872/product/media/images/20230508/13/342783394/160804714/1/1_org_zoom.jpg" },
    { id: 5, brand: "Bonnie", title: " Adult-Yetişkin Basic Cat Chıcken  10 kg ", price: "419₺", src: "https://cdn.dsmcdn.com/ty814/product/media/images/20230405/16/318803511/191134428/1/1_org_zoom.jpg" },
    { id: 6, brand: "Pawmas", title: " Tavuklu Yetişkin Kedi Maması 10 Kg", price: "509.99₺", src: "https://cdn.dsmcdn.com/ty994/product/media/images/prod/SPM/PIM/20230901/12/932fef39-59c2-3893-be0b-16ee18668145/1_org_zoom.jpg" },
    { id: 7, brand: "Goody", title: " Kuzu Etli Yetişkin Köpek Maması 15 Kg", price: "779.99₺", src: "https://cdn.dsmcdn.com/ty25/product/media/images/20201124/12/30759183/110817269/0/0_org_zoom.jpg" },
    { id: 8, brand: "Reflex", title: " Kuzu Etli Yetişkin Köpek Maması - 15 kg", price: "768₺", src: "https://cdn.dsmcdn.com/ty88/product/media/images/20210403/05/ebea4bba/16326475/1/1_org_zoom.jpg" },
    { id: 9, brand: "Apple", title: " iPad 9. Nesil 64 GB 10.2 Wi-Fi Uzay Grisi Tablet (Apple Türkiye Garantili)", price: "10.360₺", src: "https://cdn.dsmcdn.com/ty538/product/media/images/20220920/18/177519249/574062558/1/1_org_zoom.jpg" },
    { id: 10, brand: "Samsung", title: " Galaxy Tab S7 Fe Wifi Siyah Tablet (Samsung Türkiye Garantili)", price: "10.949₺", src: "https://cdn.dsmcdn.com/ty929/product/media/images/20230601/7/373137160/256530960/1/1_org_zoom.jpg" },
    { id: 11, brand: "Alcatel", title: " 1t 7 16gb Prime Black Tablet (TÜRKİYE GARANTİLİ) ALCATEL1T", price: "1599₺", src: "https://cdn.dsmcdn.com/ty1004/product/media/images/prod/SPM/PIM/20230921/11/bf2c4766-ced2-3bd9-b983-e1743794612a/1_org_zoom.jpg" },
    { id: 12, brand: "Xiaomi", title: " Mi Pad 6 Siyah Tablet 8 Ram 256 Gb Hafıza (Xiaomi Türkiye Garantili)", price: "10.999₺", src: "https://cdn.dsmcdn.com/ty968/product/media/images/20230718/17/394806039/979687196/1/1_org_zoom.jpg" },
    { id: 13, brand: "Vorcom", title: " 10.1 Inc 6 Gb Ram 128 Gb Hafıza 1920*1200 Ips Ekran 8 Çekirdek işlem...", price: "3.559₺", src: "https://cdn.dsmcdn.com/ty701/product/media/images/20230125/12/265295031/839910105/1/1_org_zoom.jpg" },
    { id: 14, brand: "Lenovo", title: " Tab M9 MediaTek Helio G80 4GB/64GB 9 HD Tablet + Kılıf + E...", price: "3.750₺", src: "https://cdn.dsmcdn.com/ty949/product/media/images/20230613/9/385169649/968025185/2/2_org_zoom.jpeg" },
    { id: 15, brand: "Samsung", title: " Galaxy Tab A8 10,5 Wifi 3/32 Gb Sm-x200 Pinkgold SM-X200-Pink", price: "4.220₺", src: "https://cdn.dsmcdn.com/ty523/product/media/images/20220907/22/170473717/560901309/1/1_org_zoom.jpg" },
    { id: 16, brand: "Huawei", title: " Matepad 11.5 8GB 128GB 11.5 Tablet+Klavye UZAY GRİSİ (HUAWE...", price: "8.430₺", src: "https://cdn.dsmcdn.com/ty963/product/media/images/20230713/17/393549466/978114755/1/1_org_zoom.jpg" },
    { id: 17, brand: "TECHNOMEN", title: " Akıllı Saat T500 Plus + Kablosuz Kulaklık Ikili Siyah Set...", price: "329.99₺", src: "https://cdn.dsmcdn.com/ty807/product/media/images/20230331/15/316281296/557808671/1/1_org_zoom.jpg" },
    { id: 18, brand: "Favors", title: " Watch 8 Ultra Siyah Akıllı Saat Arama Yapma, Sensörlü, Spor iç...", price: "299.90₺", src: "https://cdn.dsmcdn.com/ty747/product/media/images/20230224/19/288703780/867645474/1/1_org_zoom.jpg" },
    { id: 19, brand: "JAXOO", title: " Çocuk Konum Takipli Sim Kart Girişli Lbs Ve Sos Özellikli Ak...", price: "443.75₺", src: "https://cdn.dsmcdn.com/ty600/product/media/images/20221116/19/216297805/400519326/1/1_org_zoom.jpg" },
    { id: 20, brand: "Xiamo", title: " Mi Band 8 Akıllı Bileklik (Xiaomi Türkiye Garantili) miband8", price: "999₺", src: "https://cdn.dsmcdn.com/ty994/product/media/images/prod/SPM/PIM/20230901/14/0dda684b-2f6e-3b4b-9303-d64f5ddf01e7/1_org_zoom.jpg" },
    { id: 21, brand: "JavaTech", title: " M6 Akıllı Bileklik Yeni Nesil Spor Modlu Full Fonksiyon...", price: "158₺", src: "https://cdn.dsmcdn.com/ty734/product/media/images/20230215/12/281386138/205595891/1/1_org_zoom.jpg" },
    { id: 22, brand: "TALOS", title: " X Watch 7 Plus Akıllı Saat Kablosuz Şarj Gps Ios Ve Android...", price: "579₺", src: "https://cdn.dsmcdn.com/ty1006/product/media/images/prod/SPM/PIM/20230927/16/17968403-a117-3401-a3d5-1ba7d6890dac/1_org_zoom.jpg" },
    { id: 23, brand: "Teknoloji Gelsin", title: " Watch 8 Ultra Smart Watch Akıllı Saat 45mm...", price: "270₺", src: "https://cdn.dsmcdn.com/ty815/product/media/images/20230406/22/319534012/904778914/1/1_org_zoom.jpg" },
    { id: 24, brand: "Smartberry", title: " Çocuk Yeşil Konum Takipli Sim Kart Girişli Lbs Ve Sos...", price: "559.90₺", src: "https://cdn.dsmcdn.com/ty1003/product/media/images/prod/SPM/PIM/20230920/02/c03308ed-0404-3d03-8521-c6373faab1c5/1_org_zoom.jpg" }
]


export const DataProvider = ( {children} ) => {

    const [mydata, setMyData] = useState(data)
    
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )

}

export const useData = () => {
     return useContext(DataContext)
}

