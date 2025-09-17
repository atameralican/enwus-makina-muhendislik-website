import React from "react";
import post1 from "assets/images/faaliyetler/hirdavat/hirdavat-1.webp";
import post2 from "assets/images/faaliyetler/hirdavat/hirdavat-2.webp";
import post3 from "assets/images/faaliyetler/hirdavat/hirdavat-3.webp";
import post4 from "assets/images/faaliyetler/hirdavat/hirdavat-4.webp";
import FaaliyetlerPageComponent from "../components/FaaliyetlerPageComponent";

const Hirdavat = () => {
  const images = [post1, post2, post3, post4];
  return (
    <>
      <FaaliyetlerPageComponent
        title="Hırdavat"
        children={
          <>
            <p>
              <strong>Enwus Makina Mühendislik</strong>, yılların verdiği
              tecrübe ve müşteri memnuniyeti odaklı hizmet anlayışıyla, hırdavat
              sektöründe geniş ürün yelpazesi ve kaliteli hizmet anlayışı ile
              öne çıkan köklü bir kuruluştur. Kuruluşumuzdan bu yana hem
              bireysel hem de kurumsal müşterilerimize; inşaattan sanayiye,
              mobilyadan otomotive kadar pek çok sektöre yönelik hırdavat ve
              teknik malzeme tedariki sağlamaktayız. Amacımız, kaliteli ürünleri
              en uygun fiyatlarla müşterilerimizle buluşturmak, ihtiyaçlara
              yönelik en doğru ve hızlı çözümleri sunmaktır.
            </p>
            <strong> Genel Hırdavat Ürünleri</strong>
            <ul>
              <li>Civata, somun, pul, rondela grupları</li>
              <li>
                Matkap ucu, testere, zımpara, kesici ve aşındırıcı ürünler
              </li>
              <li>
                El aletleri: Tornavidalar, pense, çekiç, keski, anahtar
                takımları
              </li>
              <li>Elektrikli el aletleri ve aksesuarları</li>
              <li>
                Dolap, menteşe, ray sistemleri ve mobilya bağlantı elemanları
              </li>
              <li>Endüstriyel tip el aletleri ve sarf malzemeleri</li>
              <li>
                Kompresör bağlantı elemanları, hava tabancaları ve hortum
                sistemleri
              </li>
              <li>Kaynak makineleri ve ekipmanları</li>
              <li>
                İş güvenliği malzemeleri (baret, gözlük, eldiven, maske vs.)
              </li>
              <li>Endüstriyel temizlik ve bakım ürünleri</li>
            </ul>
          </>
        }
        images={images}
      />
    </>
  );
};

export default Hirdavat;
