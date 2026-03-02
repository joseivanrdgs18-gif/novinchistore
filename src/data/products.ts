export interface Product {
  id: string;
  name: string;
  category: 'Camisa Ayudarme' | 'Calça Casual' | 'Calça Alfaiataria' | 'Calça Jogger' | 'Bermuda em Linho' | 'Camisa em Tricô' | 'Camiseta Gola Média' | 'Shorts Alfaiataria' | 'Camisa de Linho' | 'Camisa TOTANKA' | 'Sandália Birken';
  price: number;
  image: string[];
  description: string;
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  // Camisa Ayudarme
  {
    "id": "1",
    "name": "Camisa Ayudarme Nude Urban",
    "category": "Camisa Ayudarme",
    "price": 219.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772053486/WhatsApp_Image_2026-02-25_at_18.02.12_g30v6l.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062922/WhatsApp_Image_2026-02-25_at_17.34.47_2_vk1khe.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062916/WhatsApp_Image_2026-02-25_at_17.34.46_1_du84p1.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062920/WhatsApp_Image_2026-02-25_at_17.34.46_oz4pxu.jpg"
    ],
    "description": "Camisa Over Ayudarme com corte moderno e tecido premium. Ideal para compor um look streetwear autêntico.",
    "sizes": ["P", "M", "G", "GG"],
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "2",
    "name": "Camisa Ayudarme Branca",
    "category": "Camisa Ayudarme",
    "price": 219.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062910/WhatsApp_Image_2026-02-25_at_17.34.44_1_cuf00f.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062911/WhatsApp_Image_2026-02-25_at_17.34.44_tgvita.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062910/WhatsApp_Image_2026-02-25_at_17.34.44_1_cuf00f.jpg"
    ],
    "description": "Versão branca da nossa clássica Camisa Ayudarme.",
    "sizes": ["P", "M", "G", "GG"],
    "isBestSeller": true
  },
  {
    "id": "3",
    "name": "Camisa Ayudarme Black",
    "category": "Camisa Ayudarme",
    "price": 219.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062910/WhatsApp_Image_2026-02-25_at_17.34.44_3_ice7qu.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062916/WhatsApp_Image_2026-02-25_at_17.34.46_3_hjjgwg.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062910/WhatsApp_Image_2026-02-25_at_17.34.44_3_ice7qu.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062916/WhatsApp_Image_2026-02-25_at_17.34.46_3_hjjgwg.jpg"
    ],
    "description": "Versão preta da nossa camisa Ayudarme.",
    "sizes": ["P", "M", "G", "GG"]
  },
  {
    "id": "4",
    "name": "Camisa Ayudarme Olive",
    "category": "Camisa Ayudarme",
    "price": 219.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062911/WhatsApp_Image_2026-02-25_at_17.34.45_1_mty26c.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062916/WhatsApp_Image_2026-02-25_at_17.34.45_cdwwfb.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062916/WhatsApp_Image_2026-02-25_at_17.34.46_2_jeyypc.jpg"
    ],
    "description": "Tom exclusivo branco off-white para a coleção Ayudarme.",
    "sizes": ["P", "M", "G", "GG"],
    "isNew": true
  },

  // Calça Casual
  {
    "id": "5",
    "name": "Calça Casual Marrom",
    "category": "Calça Casual",
    "price": 249.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772055080/WhatsApp_Image_2026-02-25_at_18.30.43_wdyhqh.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.37_2_ukvpdi.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.37_ku5vw3.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107852/WhatsApp_Image_2026-02-25_at_17.35.35_3_otimhe.jpg"
    ],
    "description": "Calça com modelagem over yuderme e caimento perfeito.",
    "sizes": ["38", "40", "42", "44"],
    "isBestSeller": true
  },
  {
    "id": "6",
    "name": "Calça Casual Black",
    "category": "Calça Casual",
    "price": 249.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.36_3_ogkxlv.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.37_1_dvlfht.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107852/WhatsApp_Image_2026-02-25_at_17.35.35_q1mpjh.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.36_3_ogkxlv.jpg"
    ],
    "description": "Calça casual com o caimento perfeito.",
    "sizes": ["38", "40", "42", "44"]
  },

  // Calça Alfaiataria
  {
    "id": "9",
    "name": "Calça Alfaiataria",
    "category": "Calça Alfaiataria",
    "price": 239.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772055233/WhatsApp_Image_2026-02-25_at_18.33.10_krtcgi.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772111170/WhatsApp_Image_2026-02-25_at_17.36.16_cqggxz.jpg"
    ],
    "description": "Elegância e conforto em uma peça única.",
    "sizes": ["38", "40", "42", "44"],
    "isNew": true
  },
  {
    "id": "10",
    "name": "Calça Alfaiataria Navy Blue",
    "category": "Calça Alfaiataria",
    "price": 239.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772111171/WhatsApp_Image_2026-02-25_at_17.36.15_2_lmcfvv.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772111168/WhatsApp_Image_2026-02-25_at_17.36.15_4_nh8oqj.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772111169/WhatsApp_Image_2026-02-25_at_17.36.16_1_qrtdxk.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772111165/WhatsApp_Image_2026-02-25_at_17.36.15_1_kawgkf.jpg"
    ],
    "description": "Calça de alfaiataria com pregas frontais.",
    "sizes": ["38", "40", "42", "44"]
  },

   // Calça Jogger
  {
    "id": "37",
    "name": "Calça Jogger Bege",
    "category": "Calça Jogger",
    "price": 249.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.36_mumibo.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107853/WhatsApp_Image_2026-02-25_at_17.35.36_4_jv9fni.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772107852/WhatsApp_Image_2026-02-25_at_17.35.35_2_b7w0qg.jpg" 
    ],
    "description": "Conforto e estilo para o dia a dia.",
    "sizes": ["38", "40", "42", "44"],
    "isNew": true
  },

  // Bermuda em Linho
  {
    "id": "13",
    "name": "Bermuda Linho Off-White",
    "category": "Bermuda em Linho",
    "price": 179.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772060161/WhatsApp_Image_2026-02-25_at_17.38.34_k0minw.jpg"
    ],
    "description": "Bermuda em linho premium, leve e confortável.",
    "sizes": ["P", "M", "G", "GG"],
    "isBestSeller": true
  },
  {
    "id": "14",
    "name": "Bermuda Linho Verde Oliva",
    "category": "Bermuda em Linho",
    "price": 179.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772111751/WhatsApp_Image_2026-02-25_at_17.37.44_2_h6wrme.jpg"
    ],
    "description": "Bermuda verde oliva em linho, ideal para o verão.",
    "sizes": ["P", "M", "G", "GG"]
  },
  {
    "id": "15",
    "name": "Bermuda Linho Cobre",
    "category": "Bermuda em Linho",
    "price": 179.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772111751/WhatsApp_Image_2026-02-25_at_17.37.44_1_kqsxgb.jpg"
    ],
    "description": "Tom cobre natural, versátil e elegante.",
    "sizes": ["P", "M", "G", "GG"]
  },

  // Camisa em Tricô (Previously Conjuntos Streetwear)
  {
    "id": "17",
    "name": "Camisa Tricô Marsala",
    "category": "Camisa em Tricô",
    "price": 144.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772061218/WhatsApp_Image_2026-02-25_at_17.39.03_madnga.jpg"
    ],
    "description": "Camisa em tricô com textura única.",
    "sizes": ["P", "M", "G", "GG"],
    "isNew": true
  },
  {
    "id": "18",
    "name": "Camisa Tricô Preto",
    "category": "Camisa em Tricô",
    "price": 144.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772109739/WhatsApp_Image_2026-02-25_at_17.39.03_mqovap.jpg"
    ],
    "description": "Elegância e frescor do tricô.",
    "sizes": ["P", "M", "G", "GG"]
  },
  {
    "id": "18",
    "name": "Camisa Tricô Branco",
    "category": "Camisa em Tricô",
    "price": 144.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772151536/WhatsApp_Image_2026-02-26_at_21.05.23_tmd97k.jpg"
    ],
    "description": "Elegância e frescor do tricô.",
    "sizes": ["P", "M", "G", "GG"]
  },

  // Camiseta Gola Média
  {
    "id": "21",
    "name": "Gola Média Azul",
    "category": "Camiseta Gola Média",
    "price": 139.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772110045/WhatsApp_Image_2026-02-25_at_17.39.54_wth05x.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772110027/WhatsApp_Image_2026-02-25_at_17.39.55_1_o8esym.jpg"
    ],
    "description": "Camiseta com gola média estruturada.",
    "sizes": ["P", "M", "G", "GG"]
  },
  {
    "id": "22",
    "name": "Gola Média Azul Marinho",
    "category": "Camiseta Gola Média",
    "price": 139.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772110044/WhatsApp_Image_2026-02-25_at_17.39.54_1_kfmyay.jpg"
    ],
    "description": "Minimalismo com toque sofisticado.",
    "sizes": ["P", "M", "G", "GG"],
    "isBestSeller": true
  },
  {
    "id": "23",
    "name": "Gola Média Creme",
    "category": "Camiseta Gola Média",
    "price": 139.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772110028/WhatsApp_Image_2026-02-25_at_17.39.55_f1fp6r.jpg"
    ],
    "description": "Creme urbano para qualquer ocasião.",
    "sizes": ["P", "M", "G", "GG"]
  },
  {
    "id": "24",
    "name": "Gola Média Earth",
    "category": "Camiseta Gola Média",
    "price": 139.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772110028/WhatsApp_Image_2026-02-25_at_17.39.55_3_vdnr7f.jpg"
    ],
    "description": "Tons terrosos em alta.",
    "sizes": ["P", "M", "G", "GG"]
  },
  
  // Additional Products (Categorized correctly)
  {
    "id": "25",
    "name": "Camisa Ayudarme White",
    "category": "Camisa Ayudarme",
    "price": 229.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062911/WhatsApp_Image_2026-02-25_at_17.34.45_2_a2osr7.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062911/WhatsApp_Image_2026-02-25_at_17.34.45_3_hlor5q.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062923/WhatsApp_Image_2026-02-25_at_17.34.47_dlopax.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772062921/WhatsApp_Image_2026-02-25_at_17.34.47_1_bjbmze.jpg"
    ],
    "description": "Detalhes sutis para um visual diferenciado.",
    "sizes": ["P", "M", "G", "GG"]
  },
  
  // Shorts Alfaiataria
  {
    "id": "31",
    "name": "Shorts Alfaiataria Navy Blue",
    "category": "Shorts Alfaiataria",
    "price": 174.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772115580/WhatsApp_Image_2026-02-25_at_21.08.36_m5cccy.jpg"
    ],
    "description": "Shorts de alfaiataria com corte preciso.",
    "sizes": ["38", "40", "42", "44"]
  },
  {
    "id": "32",
    "name": "Shorts Alfaiataria Cinza",
    "category": "Shorts Alfaiataria",
    "price": 174.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772115580/WhatsApp_Image_2026-02-25_at_21.08.36_1_nqviox.jpg"
    ],
    "description": "Elegância e conforto para dias quentes.",
    "sizes": ["38", "40", "42", "44"]
  },

  // Camisa de Linho
  {
    "id": "33",
    "name": "Camisa de Linho White",
    "category": "Camisa de Linho",
    "price": 149.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772115580/WhatsApp_Image_2026-02-25_at_21.08.59_kzzlrh.jpg"
    ],
    "description": "Leveza e sofisticação do linho.",
    "sizes": ["P", "M", "G", "GG"]
  },
  {
    "id": "34",
    "name": "Camisa de Linho Off-White",
    "category": "Camisa de Linho",
    "price": 149.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772115580/WhatsApp_Image_2026-02-25_at_21.08.59_1_rp4mzz.jpg"
    ],
    "description": "Fresco e elegante.",
    "sizes": ["P", "M", "G", "GG"]
  },

  // Camisa TOTANKA
  {
    "id": "38",
    "name": "Camisa TOTANKA",
    "category": "Camisa TOTANKA",
    "price": 149.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772242130/WhatsApp_Image_2026-02-26_at_21.06.00_xuhpcl.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772242130/WhatsApp_Image_2026-02-26_at_21.05.59_kn1rnr.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772242129/WhatsApp_Image_2026-02-26_at_21.05.59_2_jjpkze.jpg",
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772242129/WhatsApp_Image_2026-02-26_at_21.05.59_1_ssejh8.jpg" 
    ],
    "description": "Estilo único e autêntico da coleção TOTANKA.",
    "sizes": ["P", "M", "G", "GG"],
    "isNew": true
  },

  // Sandália Birken
  {
    "id": "35",
    "name": "Sandália Birken Caramelo",
    "category": "Sandália Birken",
    "price": 179.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772238879/WhatsApp_Image_2026-02-26_at_21.12.40_r9hj9w.jpg" 
    ],
    "description": "Conforto e estilo para os seus pés.",
    "sizes": ["38", "39", "40", "41", "42", "43"],
    "isNew": true
  },
  {
    "id": "36",
    "name": "Sandália Birken Branca",
    "category": "Sandália Birken",
    "price": 179.90,
    "image": [
      "https://res.cloudinary.com/dtzwiq2e4/image/upload/v1772238879/WhatsApp_Image_2026-02-26_at_21.12.40_1_ugvk8j.jpg" 
    ],
    "description": "Conforto e estilo para os seus pés.",
    "sizes": ["38", "39", "40", "41", "42", "43"],
    "isNew": true
  }
];
