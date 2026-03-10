import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/905442284494?text=Merhaba%2C%20bak%C4%B1c%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
const INSTAGRAM_URL = "https://www.instagram.com/bakicivarmi/";

function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden font-[var(--font-nunito)]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image
            src="/images/logo.png"
            alt="Bakıcı Var Mı?"
            width={120}
            height={60}
            className="object-contain"
            unoptimized
          />
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#f9f5ff] via-white to-[#e8faf5]">
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-24 w-80 h-80 bg-[#f9c5d1]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-24 w-96 h-96 bg-[#7ec8c8]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ffd166]/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-16">
          <div>
            <span className="inline-block bg-[#ffd166] text-[#5a4a8a] font-bold text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
              🌍 Türkiye&apos;nin Her İline Hizmet Veriyoruz
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#4a3f7a] leading-tight mb-6">
              Sevgiyle Büyüyen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9a8b8] to-[#f06292]">
                Çocuklar
              </span>{" "}
              için{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5bbfb5] to-[#2d9e93]">
                Güvenilir Bakıcılar
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Afrika kökenli, deneyimli ve İngilizce konuşan bakıcılarımızla
              çocuğunuzun hem güvende olmasını hem de dil gelişimine katkı
              sağlamasını sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hemen Bakıcı Bul
              </WhatsAppButton>
              <a
                href="#nasil-calisir"
                className="border-2 border-[#4a3f7a] text-[#4a3f7a] hover:bg-[#4a3f7a] hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 text-center"
              >
                Nasıl Çalışır?
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-2xl h-64">
                <Image
                  src="/images/babysitter1.png"
                  alt="Bakıcı ve çocuk"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl h-52">
                <Image
                  src="/images/babysitter2.png"
                  alt="Bebek bakımı"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl h-52">
                <Image
                  src="/images/babysitter3.png"
                  alt="Çocuk bakımı"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#ffd166] text-[#4a3f7a] font-black px-6 py-3 rounded-2xl shadow-xl text-sm whitespace-nowrap">
              ✨ Ücretsiz Personel Değişim Hakkı
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-gradient-to-r from-[#4a3f7a] via-[#5a4f8a] to-[#4a3f7a] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { num: "81", label: "İle Hizmet", icon: "🗺️" },
            { num: "100+", label: "Mutlu Aile", icon: "❤️" },
            { num: "Ana Dili", label: "İngilizce Bakıcılar", icon: "🌍" },
            { num: "Ücretsiz", label: "Personel Değişimi", icon: "🔄" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl">{s.icon}</span>
              <span className="text-3xl font-black text-[#ffd166]">{s.num}</span>
              <span className="text-sm font-semibold opacity-80">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="hizmetler" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#f9c5d1]/60 text-[#c2185b] font-bold text-sm px-4 py-1.5 rounded-full mb-4">
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#4a3f7a] mb-4">
              Ne Yapıyoruz?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Ailenizin ihtiyacına özel, deneyimli ve güvenilir bakıcılarımızla
              yanınızdayız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/babysitter1.png",
                emoji: "👶",
                title: "Çocuk & Bebek Bakıcısı",
                color: "from-[#f9c5d1] to-[#f06292]",
                bg: "bg-[#fff5f8]",
                border: "border-[#f9c5d1]",
                desc: "Bebeğinizden okul çağındaki çocuğunuza kadar tüm bakım ihtiyaçlarını sevgiyle karşılıyoruz. Bakıcılarımız çocuklarla oyun oynuyor, onları eğletiyor ve gelişimlerini destekliyor.",
              },
              {
                img: "/images/babysitter3.png",
                emoji: "🌍",
                title: "Dil Gelişimine Katkı",
                color: "from-[#a5d8f3] to-[#1e88e5]",
                bg: "bg-[#f5faff]",
                border: "border-[#a5d8f3]",
                desc: "Ana dili İngilizce olan bakıcılarımız, çocuğunuzun erken yaşta yabancı dil kazanmasına doğal ortamda katkı sağlar. Oyun ablası gibi hem eğlenceli hem öğretici!",
              },
              {
                img: "/images/cleaning1.png",
                emoji: "🏠",
                title: "Ev İşlerine Yardımcı",
                color: "from-[#b2e4d8] to-[#26a69a]",
                bg: "bg-[#f5fffd]",
                border: "border-[#b2e4d8]",
                desc: "Çocuğu büyük olan aileler için ev temizliği ve düzenine yardımcı olabilecek personelimiz de mevcut. Güvenilir, çalışkan ve titiz yardımcılar portföyümüzde yer alıyor.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className={`${s.bg} border-2 ${s.border} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="h-52 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{s.emoji}</span>
                    <h3 className="text-xl font-black text-[#4a3f7a]">{s.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="nasil-calisir"
        className="py-24 bg-gradient-to-br from-[#4a3f7a] to-[#6a5fa0] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#ffd166] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#f9c5d1] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#ffd166] text-[#4a3f7a] font-bold text-sm px-4 py-1.5 rounded-full mb-4">
              Süreç
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Sadece 3 adımda ailenize en uygun bakıcıyı buluyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                emoji: "💬",
                title: "Bize Ulaşın",
                desc: "WhatsApp üzerinden bize yazın. İhtiyaçlarınızı, beklentilerinizi ve tercihlerinizi dinliyoruz.",
                color: "bg-[#ffd166]",
              },
              {
                step: "02",
                emoji: "🤝",
                title: "Size Özel Eşleşme",
                desc: "Portföyümüzdeki deneyimli bakıcılar arasından ailenize en uygun adayı belirliyoruz.",
                color: "bg-[#f9c5d1]",
              },
              {
                step: "03",
                emoji: "✅",
                title: "Başlayın!",
                desc: "Bakıcınız göreve başlıyor. Memnun kalmazsanız ücretsiz personel değişim hakkınız var!",
                color: "bg-[#b2e4d8]",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                  <div
                    className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}
                  >
                    {s.emoji}
                  </div>
                  <span className="text-white/30 font-black text-5xl absolute top-6 right-8">
                    {s.step}
                  </span>
                  <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
                  <p className="text-white/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <WhatsAppButton className="bg-[#ffd166] hover:bg-yellow-400 text-[#4a3f7a] font-black px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hemen WhatsApp&apos;tan Yaz
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="ozellikler" className="py-24 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#b2e4d8] text-[#1a6b5e] font-bold text-sm px-4 py-1.5 rounded-full mb-4">
              Neden Biz?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#4a3f7a] mb-4">
              Bizi Tercih Etmeniz İçin{" "}
              <span className="text-[#f06292]">Pek Çok Sebep</span> Var
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "🌍",
                title: "Afrika Kökenli Bakıcılar",
                desc: "Özenle seçilmiş, Afrika kökenli ve deneyimli bakıcı kadromuz Türk ailelerin güvenini kazanmıştır.",
                color: "bg-[#fff3e0]",
                border: "border-[#ffcc80]",
              },
              {
                emoji: "🗣️",
                title: "Ana Dili İngilizce",
                desc: "Bakıcılarımız ana dili İngilizce olduğu için çocuğunuz oyun ortamında doğal yollarla İngilizce öğrenir.",
                color: "bg-[#e8f5e9]",
                border: "border-[#a5d6a7]",
              },
              {
                emoji: "🔄",
                title: "Ücretsiz Personel Değişimi",
                desc: "Bakıcıdan memnun kalmadıysanız ücretsiz olarak yeni bir bakıcı ile eşleştiriyoruz.",
                color: "bg-[#fce4ec]",
                border: "border-[#f48fb1]",
              },
              {
                emoji: "🗺️",
                title: "Türkiye'nin Her İli",
                desc: "İstanbul, Ankara, İzmir ve daha fazlası. Türkiye genelinde tüm illere personel yönlendiriyoruz.",
                color: "bg-[#e3f2fd]",
                border: "border-[#90caf9]",
              },
              {
                emoji: "⭐",
                title: "Deneyimli Ekip",
                desc: "Tüm bakıcılarımız daha önce ailelerde çalışmış, referansları olan deneyimli kişilerden oluşmaktadır.",
                color: "bg-[#f3e5f5]",
                border: "border-[#ce93d8]",
              },
              {
                emoji: "🏠",
                title: "Ev Temizliği de Yapıyoruz",
                desc: "Sadece çocuk bakımı değil, ev işlerine ve temizliğe yardımcı olabilecek personelimiz de portföyümüzde.",
                color: "bg-[#e0f7fa]",
                border: "border-[#80deea]",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`${f.color} border-2 ${f.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <span className="text-4xl mb-4 block">{f.emoji}</span>
                <h3 className="text-lg font-black text-[#4a3f7a] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY STRIP */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#4a3f7a]">
              Güvenle Büyüyen Çocuklar 💕
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/babysitter2.png",
              "/images/cleaning2.png",
              "/images/babysitter3.png",
              "/images/cleaning3.png",
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={src}
                  alt="Bakıcı"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="iletisim"
        className="py-24 bg-gradient-to-br from-[#f9f5ff] via-[#fff0f5] to-[#e8faf5] relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#ffd166]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#f9c5d1]/30 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-6xl mb-6 block">💌</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#4a3f7a] mb-6">
            Hemen İletişime Geçin!
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Çocuğunuz için en uygun bakıcıyı birlikte bulalım. WhatsApp
            üzerinden bize yazın, size özel en iyi eşleşmeyi yapalım.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <WhatsAppButton className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-2xl hover:shadow-green-200 hover:-translate-y-1 flex items-center justify-center gap-3">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </WhatsAppButton>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#f06292] to-[#ce5196] hover:from-[#e91e8c] hover:to-[#ad1457] text-white font-black px-10 py-5 rounded-full text-xl transition-all duration-300 shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-md border border-white">
            <p className="text-[#4a3f7a] font-bold text-sm">
              📞 WhatsApp:{" "}
              <a
                href={WHATSAPP_URL}
                className="text-green-600 hover:underline font-black"
              >
                +90 544 228 44 94
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2e2457] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/images/logo.png"
            alt="Bakıcı Var Mı?"
            width={160}
            height={80}
            className="object-contain"
            unoptimized
          />
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © 2026 Bakıcı Var Mı? — Türkiye&apos;nin Her İline Güvenilir Bakıcı
            </p>
          </div>
          <div className="flex items-center gap-4">
            <WhatsAppButton className="text-white/70 hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </WhatsAppButton>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#f06292] transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* Instagram */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-[#f06292] to-[#ce5196] hover:from-[#e91e8c] hover:to-[#ad1457] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="absolute right-full mr-3 bg-[#4a3f7a] text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
            Instagram
          </span>
        </a>
        {/* WhatsApp */}
        <WhatsAppButton className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-300 transition-all duration-300 hover:scale-110 group">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute right-full mr-3 bg-[#4a3f7a] text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
            WhatsApp
          </span>
        </WhatsAppButton>
      </div>
    </main>
  );
}
