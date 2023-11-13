import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MeetingPage = () => {

  return (
    <>
      <Navbar />
      <div className="flex my-[200px] max-lg:flex-col max-[480px]:flex-col">
        <div className=" mx-4 rounded-xl border border-neutralDGrey static max-h-[655px] max-[450px]:max-h-[1374px]">
          <div className="flex justify-between max-[450px]:contents">
            <div className="rounded-full m-12 h-[200px] w-[250px] border-2 border border-neutralDGrey max-w-[500px]"></div>
            <div className=" mt-8 p-16 text-semibold text-3xl">
              <h1 className="text-center">UZMAN PSİKOLOG</h1>
              <h2 className=" text-center font-bold text-lg mb-2 ">
                Melisa Melisa
              </h2>
              <div className="border"></div>
            </div>
          </div>
          <div className="p-2 p-4 mt-[-20px] text-2xl max-lg:text-center">Kategoriler</div>
          <div className="flex gap-4 justify-center max-[450px]:flex-col">
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Depresyon
            </button>
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Panik ve Bozukluk
            </button>
            <button className="rounded-xl p-2  border-2 border-neutralDGrey  hover:bg-neutralDGrey hover:text-white">
              Anksiyete
            </button>
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Yas
            </button>
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Sosyal Kaygı
            </button>
          </div>
          <div className="flex gap-4 justify-center mt-4 max-[450px]:flex-col">
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Duygusal Yeme
            </button>
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Sınav Kaygısı
            </button>
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Bipolar Bozukluğu
            </button>
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Hastalık Kaygısı
            </button>
            <button className="rounded-xl p-2  border-2  border-neutralDGrey hover:bg-neutralDGrey hover:text-white">
              Boşanma
            </button>
          </div>
          <div className="border-2 mt-[20px] rounded-3xl bg-neutralSilver max-w-[700px] p-2 max-lg:m-auto max-lg:mt-2">
            <div className="flex flex-col items-center">
              <div>En Yakın Tarih</div>
              <div>
                ---------------------------------------------------------------
              </div>
              <div>23.12.2023</div>
              <button className="bg-neutralDGrey p-4 m-2 rounded-xl text-white">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="max-[700px]:m-[-20px] max-[529px]:mt-4">
          <div className="mx-16 flex rounded-xl border border-white gap-4 max-lg:mt-8 max-[480px]:m--8 max-[450px]:flex-col">
            <div className="rounded-xl border border-blue flex flex-col justify-center text-center gap-4 p-4">
              <h1>Randevu</h1>
              <p>60 dakika görüntülü görüşme</p>
              <button className="p-4 rounded-xl bg-blue text-white hover:text-blue hover:bg-white hover:border border-blue">
                Seç
              </button>
            </div>
            <div className="rounded-xl border border-blue flex flex-col justify-center text-center gap-4 p-4">
              <h1>Randevu</h1>
              <p>60 dakika görüntülü görüşme</p>
              <button className="p-4 rounded-xl bg-blue text-white hover:text-blue hover:bg-white hover:border border-blue">
                Seç
              </button>
            </div>
            <div className="rounded-xl border border-blue flex flex-col justify-center text-center gap-4 p-4">
              <h1>Randevu</h1>
              <p>60 dakika görüntülü görüşme</p>
              <button className="p-4 rounded-xl bg-blue text-white hover:text-blue hover:bg-white hover:border border-blue">
                Seç
              </button>
            </div>
            <div className="rounded-xl border border-blue flex flex-col justify-center text-center gap-4 p-4">
              <h1>Randevu</h1>
              <p>60 dakika görüntülü görüşme</p>
              <button className="p-4 rounded-xl bg-blue text-white hover:text-blue hover:bg-white hover:border border-blue">
                Seç
              </button>
            </div>
          </div>
          <div className="mx-16 mt-8 flex flex-col rounded-xl border border-neutralDGrey bg-[#E5E7EB] gap-4">
            <h1 className="font-semibold text-2xl m-4">Psikolog Hakkında</h1>
            <p className="m-4 mt-[-4px]">
              Scroll down for English. Merhabalar, ben Uzman Psikolog Ezgi Nur
              Budak. 2021 yılında MEF üniversitesi Psikoloji bölümünden mezun
              olmanın ardından Macaristan'da Eötvös Lorand Üniversitesi'nde
              Klinik ve Sağlık Psikolojisi alanında yüksek lisans eğitimimi
              başarıyla tamamladım ve yalnızca tez savunmamı gerçekleştirmek
              kaldı. Hem lisans hem de yüksek lisans eğitimim sürecinde başta
              özel klinikler olmak üzere hastane, bağımlılık merkezleri gibi
              yerlerde stajlarımı tamamladım. Bunun yanında yaklaşık 2 yıldır
              süpervizyon destekli olmak üzere danışan görmekteyim. Okulda
              aldığım teorik ve pratik derslerin yanı sıra Kabul ve Kararlılık
              Terapisi ve Bilişsel Davranışçı Terapi alanlarında ekstra
              eğitimlerimi tamamladım. Ek olarak yeme davranışları, erken dönem
              çocukluk yaşantıları ve şema terapi alanlarında araştırma
              çalışmalarım bulunmaktadır. Çalışma alanlarım arasında depresyon,
              anksiyete, panik bozukluk, bozulmuş yeme davranışları, göçmen
              psikolojisi, ilişki problemleri, kronik ağrılar, bağımlılıklar
              başta olmak üzere çeşitli alanlar bulunmaktadır ve yetişkinlere
              hem Türkçe hem İngilizce destek sunmaktayım. Hello, I am
              Specialist Clinical and Health Psychologist Ezgi Nur Budak. After
              graduating from the Department of Psychology at MEF University in
              2021, I successfully completed my master's degree in Clinical and
              Health Psychology at Eötvös Lorand University in Hungary and I
              only have to defend my thesis. During both my undergraduate and
              graduate education, I completed my internships in private clinics,
              hospitals and addiction centers. In addition, I have been seeing
              clients with supervision support for about 2 years. In addition to
              the theoretical and practical courses I took at school, I
              completed my extra training in Acceptance and Commitment Therapy
              and Cognitive Behavioral Therapy. In addition, I have research
              studies in the fields of eating behaviors, early childhood
              experiences and schema therapy. My areas of work include
              depression, anxiety, panic disorder, impaired eating behaviors,
              immigrant psychology, relationship problems, chronic pain,
              addictions, and I provide support to adults in both Turkish and
              English.
            </p>
          </div>
          <div className="mx-16 mt-8 flex flex-col rounded-xl border border-neutralDGrey bg-[#E5E7EB] gap-4">
            <h1 className="font-semibold text-2xl m-4">Eğitim</h1>
            <p className="m-4 mt-[-4px]">2019-2020 Ekonomi ve Teknoloji</p>
          </div>
          <div className="mx-16 mt-8 flex flex-col rounded-xl border border-neutralDGrey bg-[#E5E7EB] gap-4">
            <h1 className="font-semibold text-2xl m-4">Sertifikalar</h1>
            <p className="m-4 mt-[-4px]">2019-2020 Ekonomi ve Teknoloji</p>
            <p className="m-4 mt-[-4px]">2019-2020 Ekonomi ve Teknoloji</p>
            <p className="m-4 mt-[-4px]">2019-2020 Ekonomi ve Teknoloji</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MeetingPage;
