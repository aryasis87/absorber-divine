/* ============================================================================
   "Catatan Herbarium" — esai konsep Plate Botani. Nadanya tenang dan
   berilmu, seperti keterangan di bawah pelat botani lama: dimulai dari
   pengamatan, baru penjelasan. Setiap esai ditandai angka Romawi dan
   menunjuk ke pelat herbarium yang relevan.
   Blok: { p } paragraf, { h } subjudul miring, { kutip } kutipan ber-garis
   ganda, { pelat } tautan ke pelat herbarium.
   ========================================================================== */

export type Blok = { p: string } | { h: string } | { kutip: string } | { pelat: string[] }

export type Esai = {
  slug: string
  no: string
  judul: string
  ringkas: string
  menit: number
  isi: Blok[]
}

export const ESAI: Esai[] = [
  {
    slug: 'buah-yang-terus-bernapas',
    no: 'I',
    judul: 'Buah yang terus bernapas',
    ringkas: 'Setelah dipetik, buah tidak mati — ia bernapas, menua, dan sebagian melepaskan gas yang mempercepat semuanya.',
    menit: 5,
    isi: [
      { p: 'Seorang pedagang di pasar induk pernah berkata bahwa buah yang baru dipetik itu "masih hidup, hanya sudah tidak punya rumah". Ia benar. Setelah terlepas dari pohon, buah terus bernapas: menyerap oksigen, melepas karbon dioksida, dan membakar cadangan gulanya sendiri.' },
      { h: 'Dua cara menua' },
      { p: 'Para ahli pascapanen membagi buah menjadi dua kelompok. Buah klimakterik — pisang, mangga, apel, pir, alpukat — mengalami lonjakan napas menjelang matang, dan lonjakan itu dipicu serta disertai pelepasan etilen. Buah non-klimakterik — jeruk, anggur, stroberi — tidak mengalami lonjakan itu; mereka tidak menjadi lebih matang setelah dipetik, hanya pelan-pelan menua.' },
      { kutip: 'Buah klimakterik tidak menunggu izin untuk matang. Ia hanya menunggu sedikit etilen — dan ia membuatnya sendiri.' },
      { h: 'Etilen sebagai pesan' },
      { p: 'Etilen adalah gas paling sederhana yang menjadi hormon tumbuhan. Satu buah yang mulai matang melepaskannya, dan buah di dekatnya membaca pesan itu sebagai tanda untuk ikut matang. Karena itulah satu tandan pisang menguning hampir bersamaan, dan satu buah busuk di peti bisa mempercepat seluruh isi peti.' },
      { p: 'Sachet penyerap etilen bekerja dengan menangkap pesan itu sebelum sampai ke buah lain. Buahnya tetap bernapas — tidak ada yang dihentikan — hanya saja percakapan di dalam peti menjadi lebih pelan.' },
      { pelat: ['pisang', 'mangga', 'jeruk'] },
    ],
  },
  {
    slug: 'ruang-yang-dibagi-bersama',
    no: 'II',
    judul: 'Ruang yang dibagi bersama',
    ringkas: 'Di gudang dan kontainer, komoditas yang berbeda sering harus bertetangga. Sebagian tetangga lebih ramah daripada yang lain.',
    menit: 4,
    isi: [
      { p: 'Dalam herbarium, setiap spesimen mendapat halamannya sendiri. Di gudang, kemewahan itu jarang ada. Apel bertumpuk di samping sayuran daun, bunga potong menunggu di lorong yang sama dengan peti mangga. Masing-masing membawa sifatnya sendiri ke ruang bersama.' },
      { h: 'Tetangga yang bising, tetangga yang peka' },
      { p: 'Apel dan pir adalah tetangga yang "bising": mereka melepas etilen dalam jumlah besar. Bunga potong dan sayuran daun adalah tetangga yang peka: sedikit saja etilen membuat kelopak rontok dan daun menguning. Menempatkan keduanya berdampingan tanpa perlindungan adalah kesalahan penyimpanan yang paling sering kami temui.' },
      { kutip: 'Kesegaran sebuah peti tidak hanya ditentukan oleh isinya, tetapi juga oleh siapa yang berada di sebelahnya.' },
      { h: 'Tiga cara berbagi ruang dengan baik' },
      { p: 'Pertama, pisahkan penghasil tinggi dari yang sangat peka bila ruangnya memungkinkan. Kedua, bila harus bersama, letakkan sachet di sisi penghasil — lebih baik menangkap etilen di sumbernya. Ketiga, ingat bahwa tidak semua masalah adalah etilen: anggur dan stroberi lebih cepat rusak karena kelembapan, dan untuk itu yang dibutuhkan adalah desiccant.' },
      { pelat: ['apel', 'bunga-potong', 'anggur'] },
    ],
  },
  {
    slug: 'warna-yang-menandai-waktu',
    no: 'III',
    judul: 'Warna yang menandai waktu',
    ringkas: 'Ungu yang perlahan menjadi cokelat — cara sebuah sachet memberi tahu bahwa tugasnya hampir selesai.',
    menit: 3,
    isi: [
      { p: 'Pelat-pelat herbarium lama menua dengan anggun: kertasnya menguning, tintanya memudar, dan dari perubahan warna itulah kita tahu umurnya. Sachet kami menua dengan cara yang serupa.' },
      { h: 'Dari ungu ke cokelat' },
      { p: 'Bahan aktif di dalam sachet, kalium permanganat, berwarna ungu pekat. Setiap kali ia menangkap etilen, sebagian berubah menjadi senyawa berwarna cokelat. Semakin banyak etilen yang ditangkap, semakin cokelat isinya — hingga seluruhnya berubah warna dan tugasnya selesai.' },
      { kutip: 'Kami tidak meminta Anda menebak kapan sachet harus diganti. Warnanya yang memberi tahu.' },
      { p: 'Dalam kondisi biasa, perubahan itu memakan waktu sekitar tiga puluh hari sejak kemasannya dibuka; dalam penyimpanan yang ideal, hingga empat puluh lima hari. Cukup untuk menemani satu pelayaran laut dari pelabuhan muat sampai gudang tujuan.' },
      { pelat: ['mangga', 'pir'] },
    ],
  },
]

export const esaiBySlug = (slug: string) => ESAI.find((e) => e.slug === slug)
