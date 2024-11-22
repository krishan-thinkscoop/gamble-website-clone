import { useState, useEffect, useRef } from 'react'
import { Search, ChevronLeft, ChevronRight, Star, Phone } from 'lucide-react'

import SocialMediaLinks from './components/SocialMediaLinks';
import button1 from './images/button1.png';
import button2 from './images/button2.png';


// Add this translation object outside the component
const translations = {
  en: {
    aboutUs: "About Us",
    termsOfService: "Terms Of Service", 
    privacyPolicy: "Privacy Policy",
    responsibleGaming: "Responsible Gaming",
    kycPolicies: "KYC Policies",
    loginRegister: "Login or Register",
    
    responsibility: "Responsibility",
    bonusRules: "General Bonuses and Bonus Rules",
    selfExclusion: "Self-Exclusion", 
    antiMoneyLaundering: "Anti-Money Laundering",
    fairnessAndRNG: "Fairness and RNG Testing Methods",
    disputeResolution: "Dispute Resolution",

    games: "Games",
    sportsbook: "Sportsbook",
    esport: "E-sport",
    slot: "Slot",
    liveCasino: "Live Casino",

    contact: "Contact",
    callYou: "Let Us Call You!",
    contactUs: "Contact Us",
    support: "24/7 Support",

    loginButton: 'Login',
    callMeButton: 'Call Me Back',

    topProviders: "Top Providers"
  },
  tr: {
    aboutUs: "Hakkımızda",
    termsOfService: "Kullanım Koşulları",
    privacyPolicy: "Gizlilik Politikası", 
    responsibleGaming: "Sorumlu Oyun",
    kycPolicies: "KYC Politikaları",
    loginRegister: "Giriş yap veya Kayıt ol",

    responsibility: "Sorumluluk",
    bonusRules: "Genel Bonus ve Bonus Kuralları",
    selfExclusion: "Kendi Kendini Dışlama",
    antiMoneyLaundering: "Kara Para Aklamayla Mücadele",
    fairnessAndRNG: "Adillik ve RNG Test Yöntemleri",
    disputeResolution: "Anlaşmazlık Çözümü",

    games: "Oyunlar",
    sportsbook: "Spor Bahisleri",
    esport: "E-spor",
    slot: "Slot",
    liveCasino: "Canlı Casino",

    contact: "İletişim",
    callYou: "Sizi Arayalım!",
    contactUs: "Bize Ulaşın",
    support: "7/24 Destek",

    loginButton: 'Giriş Yap',
    callMeButton: 'Sizi Arayalım',

    topProviders: "Hit Sağlayıcılar"
  }
};

const providerTranslations = {
  en: {
    'Pragmatic Play': 'Pragmatic Play',
    'Netent': 'Netent',
    'Red Tiger': 'Red Tiger',
    'Belatra': 'Belatra',
    'Betsoft': 'Betsoft',
    'Redrake': 'Redrake',
    'Falcon Gaming': 'Falcon Gaming',
    'High5': 'High5',
    'Amusnet': 'Amusnet',
    'Bolt-Gaming': 'Bolt-Gaming',
    'Hacksaw': 'Hacksaw',
    'Playson': 'Playson',
    'Wazdan': 'Wazdan',
    'Ruby Play': 'Ruby Play',
    'Nolimit City': 'Nolimit City',
    'BGaming': 'BGaming'
  },
  tr: {
    'Pragmatic Play': 'Pragmatik Oyun',
    'Netent': 'Netent',
    'Red Tiger': 'Kırmızı Kaplan',
    'Belatra': 'Belatra',
    'Betsoft': 'Betsoft',
    'Redrake': 'Redrake',
    'Falcon Gaming': 'Şahin Oyunları',
    'High5': 'High5',
    'Amusnet': 'Amusnet',
    'Bolt-Gaming': 'Bolt-Oyun',
    'Hacksaw': 'Hacksaw',
    'Playson': 'Playson',
    'Wazdan': 'Wazdan',
    'Ruby Play': 'Yakut Oyun',
    'Nolimit City': 'Limitsiz Şehir',
    'BGaming': 'B-Oyun'
  }
};

const tabTranslations = {
  en: ['All', 'Favorites', 'Editor\'s Choice', 'New', 'Free Spins', 'Betting TV', 'Bonuses'],
  tr: ['Tümü', 'Favorilerim', 'Editörün Seçimi', 'Yeni', 'Bedava Dönüş', 'Bahis TV', 'Bonuslar']
};

const gameTranslations = {
  en: {
    'Pineapple Paradise': 'Pineapple Paradise',
    'Viking Sword': 'Viking Sword',
    'Panda Punch': 'Panda Punch',
    'Witch Orb': 'Witch Orb',
    'Road Of Anubis': 'Road Of Anubis',
    'Big Bass Halloween': 'Big Bass Halloween'
  },
  tr: {
    'Pineapple Paradise': 'Ananas Cenneti',
    'Viking Sword': 'Viking Kılıcı',
    'Panda Punch': 'Panda Yumruğu',
    'Witch Orb': 'Cadı Küresi',
    'Road Of Anubis': 'Anubis\'in Yolu',
    'Big Bass Halloween': 'Büyük Bass Cadılar Bayramı'
  }
};

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Tümü')
  const navItems = ['Bahis', 'Canlı', 'Slots', 'Esports', 'Sanal', 'Canlı Casino', 'Diğer Oyunlar', 'Parlaybay']
  const providers = [
    { name: 'Pragmatic Play', logo: 'https://placehold.co/24x24/png?text=PP' },
    { name: 'Netent', logo: 'https://placehold.co/24x24/png?text=NT' },
    { name: 'Red Tiger', logo: 'https://placehold.co/24x24/png?text=RT' },
    { name: 'Belatra', logo: 'https://placehold.co/24x24/png?text=BL' },
    { name: 'Betsoft', logo: 'https://placehold.co/24x24/png?text=BS' },
    { name: 'Redrake', logo: 'https://placehold.co/24x24/png?text=RD' },
    { name: 'Falcon Gaming', logo: 'https://placehold.co/24x24/png?text=FG' },
    { name: 'High5', logo: 'https://placehold.co/24x24/png?text=H5' },
    { name: 'Amusnet', logo: 'https://placehold.co/24x24/png?text=AM' },
    { name: 'Bolt-Gaming', logo: 'https://placehold.co/24x24/png?text=BG' },
    { name: 'Hacksaw', logo: 'https://placehold.co/24x24/png?text=HS' },
    { name: 'Playson', logo: 'https://placehold.co/24x24/png?text=PS' },
    { name: 'Wazdan', logo: 'https://placehold.co/24x24/png?text=WZ' },
    { name: 'Ruby Play', logo: 'https://placehold.co/24x24/png?text=RP' },
    { name: 'Nolimit City', logo: 'https://placehold.co/24x24/png?text=NC' },
    { name: 'BGaming', logo: 'https://placehold.co/24x24/png?text=BG' },
    { name: 'Pragmatic Play', logo: 'https://placehold.co/24x24/png?text=PP' },
    { name: 'Netent', logo: 'https://placehold.co/24x24/png?text=NT' },
    { name: 'Red Tiger', logo: 'https://placehold.co/24x24/png?text=RT' },
    { name: 'Belatra', logo: 'https://placehold.co/24x24/png?text=BL' },
    { name: 'Betsoft', logo: 'https://placehold.co/24x24/png?text=BS' },
    { name: 'Redrake', logo: 'https://placehold.co/24x24/png?text=RD' },
    { name: 'Falcon Gaming', logo: 'https://placehold.co/24x24/png?text=FG' },
    { name: 'High5', logo: 'https://placehold.co/24x24/png?text=H5' },
    { name: 'Amusnet', logo: 'https://placehold.co/24x24/png?text=AM' },
    { name: 'Bolt-Gaming', logo: 'https://placehold.co/24x24/png?text=BG' },
    { name: 'Hacksaw', logo: 'https://placehold.co/24x24/png?text=HS' },
    { name: 'Playson', logo: 'https://placehold.co/24x24/png?text=PS' },
    { name: 'Wazdan', logo: 'https://placehold.co/24x24/png?text=WZ' },
    { name: 'Ruby Play', logo: 'https://placehold.co/24x24/png?text=RP' },
    { name: 'Nolimit City', logo: 'https://placehold.co/24x24/png?text=NC' },
    { name: 'BGaming', logo: 'https://placehold.co/24x24/png?text=BG' },
    { name: 'Pragmatic Play', logo: 'https://placehold.co/24x24/png?text=PP' },
    { name: 'Netent', logo: 'https://placehold.co/24x24/png?text=NT' },
    { name: 'Red Tiger', logo: 'https://placehold.co/24x24/png?text=RT' },
    { name: 'Belatra', logo: 'https://placehold.co/24x24/png?text=BL' },
    { name: 'Betsoft', logo: 'https://placehold.co/24x24/png?text=BS' },
    { name: 'Redrake', logo: 'https://placehold.co/24x24/png?text=RD' },
    { name: 'Falcon Gaming', logo: 'https://placehold.co/24x24/png?text=FG' },
    { name: 'High5', logo: 'https://placehold.co/24x24/png?text=H5' },
    { name: 'Amusnet', logo: 'https://placehold.co/24x24/png?text=AM' },
    { name: 'Bolt-Gaming', logo: 'https://placehold.co/24x24/png?text=BG' },
    { name: 'Hacksaw', logo: 'https://placehold.co/24x24/png?text=HS' },
    { name: 'Playson', logo: 'https://placehold.co/24x24/png?text=PS' },
    { name: 'Wazdan', logo: 'https://placehold.co/24x24/png?text=WZ' },
    { name: 'Ruby Play', logo: 'https://placehold.co/24x24/png?text=RP' },
    { name: 'Nolimit City', logo: 'https://placehold.co/24x24/png?text=NC' },
    { name: 'BGaming', logo: 'https://placehold.co/24x24/png?text=BG' },
    { name: 'Pragmatic Play', logo: 'https://placehold.co/24x24/png?text=PP' },
    { name: 'Netent', logo: 'https://placehold.co/24x24/png?text=NT' },
    { name: 'Red Tiger', logo: 'https://placehold.co/24x24/png?text=RT' },
    { name: 'Belatra', logo: 'https://placehold.co/24x24/png?text=BL' },
    { name: 'Betsoft', logo: 'https://placehold.co/24x24/png?text=BS' },
    { name: 'Redrake', logo: 'https://placehold.co/24x24/png?text=RD' },
    { name: 'Falcon Gaming', logo: 'https://placehold.co/24x24/png?text=FG' },
    { name: 'High5', logo: 'https://placehold.co/24x24/png?text=H5' },
    { name: 'Amusnet', logo: 'https://placehold.co/24x24/png?text=AM' },
    { name: 'Bolt-Gaming', logo: 'https://placehold.co/24x24/png?text=BG' },
    { name: 'Hacksaw', logo: 'https://placehold.co/24x24/png?text=HS' },
    { name: 'Playson', logo: 'https://placehold.co/24x24/png?text=PS' },
    { name: 'Wazdan', logo: 'https://placehold.co/24x24/png?text=WZ' },
    { name: 'Ruby Play', logo: 'https://placehold.co/24x24/png?text=RP' },
    { name: 'Nolimit City', logo: 'https://placehold.co/24x24/png?text=NC' },
    { name: 'BGaming', logo: 'https://placehold.co/24x24/png?text=BG' },
  ]
  const promotionalBanners = [
    { image: 'https://cloudflarebh.cdnetworkcp.com/images/cms/1732040444.webp', alt: 'Promotional Banner 1', tag: 'Yeni Oyun1', tagColor: 'bg-[#6a1b9a]' },
    { image: 'https://cloudflarebh.cdnetworkcp.com/images/cms/1732040418.webp', alt: 'Promotional Banner 2', tag: 'Turnuva1', tagColor: 'bg-[#d32f2f]' },
    { image: 'https://cloudflarebh.cdnetworkcp.com/images/cms/1732040444.webp', alt: 'Promotional Banner 3', tag: 'Yeni Oyun2', tagColor: 'bg-[#6a1b9a]' },
    { image: 'https://cloudflarebh.cdnetworkcp.com/images/cms/1732040418.webp', alt: 'Promotional Banner 4', tag: 'Turnuva2', tagColor: 'bg-[#d32f2f]' },
  ]
  const games = [
    { title: 'Pineapple Paradise', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Viking Sword', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Panda Punch', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Witch Orb', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Road Of Anubis', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Big Bass Halloween', provider: 'Pragmatic', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Pineapple Paradise', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Viking Sword', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Panda Punch', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Witch Orb', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Road Of Anubis', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Big Bass Halloween', provider: 'Pragmatic', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Pineapple Paradise', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Viking Sword', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Panda Punch', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Witch Orb', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Road Of Anubis', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Big Bass Halloween', provider: 'Pragmatic', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Pineapple Paradise', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Viking Sword', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Panda Punch', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Witch Orb', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Road Of Anubis', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Big Bass Halloween', provider: 'Pragmatic', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Pineapple Paradise', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Viking Sword', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Panda Punch', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Witch Orb', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
    { title: 'Road Of Anubis', provider: 'Exagaming', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/pineapple-paradise.png?2024-11-01%2017:37:03' },
    { title: 'Big Bass Halloween', provider: 'Pragmatic', image: 'https://cloudflarebh.cdnetworkcp.com/games/exagaming/viking-sword.png?2024-11-01%2017:35:48' },
  ]
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const tabsContainerRef = useRef(null)

  // Add language state
  const [language, setLanguage] = useState('tr'); // or 'tr' for Turkish
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  
  // Get current translations
  const t = translations[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        (prevIndex + 2) >= promotionalBanners.length ? 0 : prevIndex + 2
      )
    }, 3000) // Change slides every 3 seconds

    return () => clearInterval(timer)
  }, [promotionalBanners.length])

  const handleScroll = (direction) => {
    const container = tabsContainerRef.current
    if (!container) return

    const scrollAmount = 200 // Adjust this value to control scroll distance
    const newPosition = direction === 'left' 
      ? Math.max(scrollPosition - scrollAmount, 0)
      : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth)
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })
    setScrollPosition(newPosition)
  }

  // Update the providers, tabs and games arrays to use translations
  const getProviderName = (providerKey) => {
    return providerTranslations[language][providerKey] || providerKey;
  };

  const getGameTitle = (gameKey) => {
    return gameTranslations[language][gameKey] || gameKey;
  };

  // Use translated tabs
  const translatedTabs = tabTranslations[language];

  return (
    <div className="min-h-screen bg-[url('./images/bg-cc.svg')] bg-no-repeat bg-cover">
      {/* Header */}
      <header className="px-5 mx-auto" style={{ maxWidth: '1200px', minWidth: '1200px' }}>
        <div className="container mx-auto flex items-center justify-between py-[30px]">
          <div className="text-[#1fd18d] text-2xl font-bold flex items-center">
            <svg viewBox="0 0 202 29" xmlns="http://www.w3.org/2000/svg" height="30">
              <path fillRule="evenodd" clipRule="evenodd" d="M54.267 3.458c.085-.085.169-.169.27-.253L52.025.708A2.331 2.331 0 0050.338 0c-.64 0-1.23.253-1.686.708-.927.928-.944 2.446-.017 3.374l2.53 2.53c.084-.101.168-.202.253-.287l2.85-2.867zm7.824 6.797l.05-.202a2.434 2.434 0 00-.37-1.805l-.337-.489-2.344-3.002a2.483 2.483 0 00-1.821-.962 2.5 2.5 0 00-1.94.725l-2.428 2.413-.438.438a2.4 2.4 0 00-.22 3.154c.068.101.153.186.22.253.186.186.388.32.607.439a2.47 2.47 0 002.816-.472l.405-.388a.812.812 0 01.54-.22h.067c.22.017.421.135.556.32l.32.456c.76 1.13 2.26 1.434 3.356.692.472-.32.81-.776.961-1.316v-.034zM51.57 12.01a2.398 2.398 0 01-3.457.506 1.618 1.618 0 01-.075-.085 1.486 1.486 0 00-.076-.084l-3.81-3.829h-.018a2.409 2.409 0 01.017-3.373 2.398 2.398 0 013.39-.017v.017l2.866 2.867a3.882 3.882 0 00-.152 1.08c0 .843.287 1.686.793 2.361.118.152.236.287.354.405.05.05.101.101.168.152zm-4.704 4.773c.455-.472.691-1.08.691-1.704 0-.607-.219-1.214-.691-1.652l-3.81-3.813v-.016l-.018-.017a2.331 2.331 0 00-1.686-.709 2.37 2.37 0 00-1.703.709 2.38 2.38 0 00-.169 3.188l4.199 4.2a2.38 2.38 0 003.187-.186zM31.79 7.22l-3.39 3.39-.37-.37a2.371 2.371 0 01-.708-1.704c0-.641.253-1.248.708-1.687a2.36 2.36 0 011.686-.708 2.4 2.4 0 011.703.708l.371.371zm27.182 16.783l2.765-2.547c2.698-2.48 3.153-6.578 1.231-9.597-.27.37-.59.691-.978.961a3.806 3.806 0 01-2.175.675 3.954 3.954 0 01-3.086-1.467 3.898 3.898 0 01-3.844.742c-.009.008-.013.02-.017.033a.083.083 0 01-.017.034 5.001 5.001 0 01-.472.574 3.893 3.893 0 01-2.766 1.147c-.185 0-.387-.017-.573-.051a3.92 3.92 0 01-1.096 3.34 3.922 3.922 0 01-5.244.27c-.034-.017-.05-.034-.068-.05l-4.266-4.268-1.045-1.046-3.39 3.39 7.521 7.523a12.621 12.621 0 0017.52.337z" fill="#00C683" />
              <path fillRule="evenodd" clipRule="evenodd" d="M121.616 4.89c0 .59.217 1.086.651 1.489.434.388.992.59 1.69.605.697 0 1.255-.217 1.69-.62.434-.404.651-.931.651-1.551 0-.574-.217-1.055-.651-1.443-.435-.387-1.008-.573-1.69-.573-.698 0-1.256.201-1.69.604-.434.404-.651.9-.651 1.49zm4.201 3.893h-3.752v12.95h3.752V8.782zm-24.96 1.876a5.378 5.378 0 00-2.326-2.264c-.992-.512-2.155-.775-3.473-.775-1.302 0-2.465.263-3.457.775a5.547 5.547 0 00-2.325 2.264c-.558.993-.837 2.187-.837 3.583v7.49h3.798v-3.101h5.659v3.101h3.798v-7.49c0-1.396-.279-2.59-.837-3.583zm-2.962 3.117v1.908h-5.643v-1.907c0-1.008.248-1.753.745-2.28.496-.512 1.178-.776 2.061-.776.884 0 1.566.248 2.078.776.511.527.76 1.287.76 2.28zM85.99 17.934c0-.838-.217-1.551-.636-2.125-.418-.59-1.023-1.008-1.798-1.303.558-.31.992-.713 1.287-1.225.294-.511.45-1.1.45-1.752 0-1.117-.466-2-1.396-2.652-.93-.667-2.279-.993-4.062-.993h-7.07v13.85h7.458c1.876 0 3.302-.326 4.294-.993.977-.667 1.473-1.598 1.473-2.807zm-9.473-4.467v-2.915h2.838c.697 0 1.24.124 1.597.372.356.248.542.62.542 1.101 0 .465-.186.822-.558 1.07-.357.248-.9.372-1.581.372h-2.838zm3.427 2.544c1.473 0 2.217.511 2.217 1.52 0 1.023-.729 1.52-2.217 1.504H76.5V16.01h3.442zm25.317-8.127h3.798v5.289h5.628v-5.29h3.798v13.834h-3.798v-5.475h-5.628v5.49h-3.798V7.883zm25.487 13.694c-1.069-.279-1.922-.636-2.558-1.085l1.318-2.823c.62.419 1.349.744 2.186.993.837.248 1.69.356 2.543.356.806 0 1.379-.108 1.736-.325.357-.217.543-.512.543-.884 0-.419-.217-.73-.667-.93-.45-.202-1.163-.404-2.139-.59a19.704 19.704 0 01-2.652-.714 4.51 4.51 0 01-1.798-1.21c-.512-.558-.76-1.333-.76-2.31 0-.868.248-1.628.745-2.31.496-.668 1.209-1.195 2.155-1.583.945-.372 2.046-.558 3.302-.558.93 0 1.829.093 2.713.295.884.201 1.643.496 2.279.9l-1.225 2.822c-1.147-.713-2.465-1.055-3.922-1.055-.791 0-1.365.124-1.737.341-.372.233-.558.543-.558.931 0 .419.217.729.667.915.449.186 1.163.388 2.139.574 1.055.217 1.938.465 2.636.713a4.298 4.298 0 011.798 1.21c.512.558.76 1.302.76 2.248 0 .884-.248 1.66-.729 2.327-.496.667-1.209 1.194-2.155 1.582-.945.372-2.062.558-3.364.558a12.084 12.084 0 01-3.256-.388zm18.915-3.086a6.664 6.664 0 002.651 2.512c1.131.605 2.403.915 3.783.947 2.341 0 4.139-.73 5.395-2.172l-1.489-1.52c-1.054 1.102-2.325 1.66-3.829 1.66-.977 0-1.86-.217-2.636-.651a4.743 4.743 0 01-1.829-1.8c-.45-.76-.667-1.612-.667-2.558 0-.962.233-1.83.667-2.59a4.705 4.705 0 011.829-1.784c.776-.418 1.659-.636 2.636-.636 1.535 0 2.806.543 3.829 1.629l1.489-1.52c-1.241-1.427-3.039-2.14-5.395-2.14-1.396 0-2.652.31-3.783.915-1.117.605-2.016 1.442-2.651 2.512-.636 1.07-.962 2.264-.962 3.598s.326 2.528.962 3.598zm16.96 2.512c-1.131-.604-2.031-1.442-2.666-2.512-.636-1.07-.961-2.264-.961-3.598s.325-2.528.961-3.598c.635-1.07 1.535-1.907 2.666-2.512 1.132-.605 2.403-.915 3.799-.915 1.411 0 2.682.31 3.814.915a6.683 6.683 0 012.651 2.512c.635 1.07.961 2.264.961 3.598s-.326 2.528-.961 3.598c-.636 1.07-1.535 1.908-2.651 2.512-1.132.605-2.403.915-3.814.915-1.396 0-2.667-.31-3.799-.915zm6.388-1.752a4.665 4.665 0 001.814-1.784 5.09 5.09 0 00.666-2.574c0-.961-.217-1.814-.666-2.574a4.665 4.665 0 00-1.814-1.784c-.775-.434-1.644-.651-2.605-.651-.961 0-1.829.217-2.604.651a4.665 4.665 0 00-1.814 1.784 5.094 5.094 0 00-.667 2.574c0 .962.217 1.815.667 2.575a4.665 4.665 0 001.814 1.783c.775.434 1.643.651 2.604.651.977-.015 1.845-.232 2.605-.651zm28.355-6.095c0-1.721-.434-3.04-1.317-3.939-.884-.9-2.109-1.35-3.675-1.365-.992 0-1.876.186-2.666.559a4.46 4.46 0 00-1.876 1.581c-.419-.697-.977-1.24-1.69-1.597s-1.55-.543-2.496-.543c-.868 0-1.643.155-2.357.45a4.65 4.65 0 00-1.752 1.318V8.054h-2.279v13.678h2.326v-8.328c0-1.194.31-2.078.93-2.652.62-.573 1.442-.868 2.465-.868 1.008 0 1.783.28 2.341.837.558.574.837 1.443.837 2.606v8.405h2.326v-8.328c0-1.194.295-2.078.899-2.652.589-.573 1.411-.868 2.434-.868 1.008 0 1.799.28 2.372.837.574.574.853 1.443.853 2.606v8.39h2.325v-8.56z" fill="#fff" />
              <path d="M144.266 16.987a1.737 1.737 0 100-3.475 1.737 1.737 0 000 3.475z" fill="#00C683" />
              <path fillRule="evenodd" clipRule="evenodd" d="M36.12 11.829a2.4 2.4 0 000-3.407 2.399 2.399 0 00-1.703-.709 2.36 2.36 0 00-1.687.709l-5.328 5.33a1.27 1.27 0 01-1.417.287 1.263 1.263 0 01-.792-1.181 2.4 2.4 0 00-.708-1.704 2.331 2.331 0 00-1.686-.708h-.051a2.07 2.07 0 01-1.417-.59 2.067 2.067 0 01-.607-1.468 2.509 2.509 0 00-.708-1.687 2.331 2.331 0 00-1.686-.708h-.017a2.013 2.013 0 01-2.04-2.041 2.4 2.4 0 00-.708-1.704 2.398 2.398 0 00-3.406 0l-8.347 8.333L2.193 12.2a7.536 7.536 0 00-2.192 5.465c.05 2.075.894 3.98 2.411 5.38l2.766 2.548a12.621 12.621 0 0017.52-.338L36.12 11.83zM6.864 5.402l1.619-1.619a.91.91 0 00-.641-.354A3.891 3.891 0 003.626 5.52c0 .009-.004.013-.008.017-.004.005-.008.009-.008.017l-2.412 5.313c-.05.085-.067.186-.084.287l.017-.017 1.787-1.804 1.906-1.89 1.635-1.636.405-.405z" fill="#00C683" />
            </svg>
          </div>
          <div className="flex items-center gap-2 relative">
            <button 
              className="text-white text-sm rounded flex items-center mx-4 gap-1"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              {language === 'tr' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width={20} height={15} className="mr-2">
                  <rect width="1200" height="800" fill="#E30A17"/>
                  <circle cx="425" cy="400" r="200" fill="#ffffff"/>
                  <circle cx="475" cy="400" r="160" fill="#E30A17"/>
                  <path d="M583.334 400l180.901 58.779-111.804-153.885v190.212l111.804-153.885z" fill="#ffffff"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width={20} height={15} className="mr-2">
                  <clipPath id="t">
                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                  </clipPath>
                  <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
                </svg>
              )}
              <label>{language === 'tr' ? 'Türkçe' : 'English'}</label>
              <svg 
                viewBox="0 0 6 4" 
                xmlns="http://www.w3.org/2000/svg" 
                width="6px"
                className={`transform transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3 4L0 0h6L3 4z"/>
              </svg>
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#1e2630] border border-[#3a4553] rounded-md shadow-lg">
                <button 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#3a4553]"
                  onClick={() => {
                    setLanguage('en');
                    setIsLanguageDropdownOpen(false);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width={20} height={15} className="mr-2">
                    <clipPath id="t">
                      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                    </clipPath>
                    <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
                  </svg>
                  English
                </button>
                <button 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#3a4553]"
                  onClick={() => {
                    setLanguage('tr');
                    setIsLanguageDropdownOpen(false);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width={20} height={15} className="mr-2">
                    <rect width="1200" height="800" fill="#E30A17"/>
                    <circle cx="425" cy="400" r="200" fill="#ffffff"/>
                    <circle cx="475" cy="400" r="160" fill="#E30A17"/>
                    <path d="M583.334 400l180.901 58.779-111.804-153.885v190.212l111.804-153.885z" fill="#ffffff"/>
                  </svg>
                  Türkçe
                </button>
              </div>
            )}
            <button className="text-white hover:bg-[#3a4553] p-2 rounded ml-4 mr-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
            <button className="bg-[#008758] hover:bg-[#1d6c51] text-white py-2 h-[49px] rounded-2xl px-[30px]">
              {t.loginButton}
            </button>
            <button className="bg-transparent text-white px-4 py-2 flex items-center h-[49px] rounded-2xl border-[1px] border-white border-opacity-10 hover:border-opacity-20 hover:bg-white hover:bg-opacity-10">
              <Phone className="w-4 h-4 mr-2" />
              {t.callMeButton}
            </button>
          </div>
        </div>
      </header>
      {/* Navigation */}
      <nav className="px-5 mx-auto" style={{ maxWidth: '1200px', minWidth: '1200px' }}>
        {/* <div className="container mx-auto flex justify-between items-center"> */}
          <ul className="container mx-auto flex justify-between items-cente text-[15px]">
            {navItems.map((item) => (
              <li key={item} className={`flex justify-center items-center ${
                    item !== 'Slots' ? 'hover:border-b-2 hover:border-[#ffd700]' : ''
                  }`}>
                <a
                  href="#"
                  className={`block pb-[10px] text-white ${
                    item === 'Slots' ? 'border-b-2 border-[#ffd700] text-white' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="flex justify-center items-center">
            <button className="text-[#ffd700] pb-[10px] hover:bg-[#3a4553] ml-5 rounded flex items-center gap-1 hover:border-b-2 hover:border-[#ffd700]">
            <svg viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px" }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.552.875A1 1 0 014.333.5h9.334a1 1 0 01.78.375l2.667 3.334a1 1 0 01-.017 1.27l-7.334 8.667a1 1 0 01-1.526 0L.903 5.479a1 1 0 01-.017-1.27L3.552.875zM4.814 2.5L3.747 3.833h10.506L13.186 2.5H4.814zm9.363 3.333H3.823L9 11.952l5.177-6.119z" fill="#FFDE00" />
            </svg>
              <label>Bonuslar</label>
            </button>
            </li>
            <li className="flex justify-center items-center">
            <button className="text-white pb-[10px] hover:bg-[#3a4553] rounded flex items-center gap-2 hover:border-b-2 hover:border-[#ffd700]">
            <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" style={{ width: "18px" }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.599 2.649c-.09.076-.099.136-.099.158v6.386c0 .022.008.082.099.158a.717.717 0 00.458.149h11.886c.207 0 .366-.07.459-.149.09-.076.098-.135.098-.156V2.807c0-.022-.008-.082-.099-.158a.717.717 0 00-.458-.149H3.057a.717.717 0 00-.458.149zM.5 2.807C.5 1.376 1.816.5 3.057.5h11.886c1.241 0 2.557.876 2.557 2.307v6.385m0 .002c0 1.431-1.317 2.306-2.557 2.306H3.057C1.816 11.5.5 10.624.5 9.193V2.807M9 14.5c-1.833 0-3.62.243-4.936.696a1 1 0 11-.65-1.892C5.002 12.758 7.023 12.5 9 12.5c1.976 0 3.998.258 5.587.804a1 1 0 11-.65 1.892C12.62 14.743 10.833 14.5 9 14.5z" fill="#FFDE00" />
            </svg>
              <span>Bahis <span className="italic font-extrabold text-[#ffde00]">TV</span></span>
            </button>
            </li>
          </ul>
      </nav>
      <div className="container mx-auto mt-6 flex px-[32px]" style={{ maxWidth: '1200px', minWidth: '1200px' }}>
        {/* Sidebar */}
        <aside className="w-[17%]">
          <div className="rounded-lg px-4">
            <div className="relative text-[12px] mb-6">
              <input
                type="text"
                placeholder={language === 'tr' ? 'Arama' : 'Search'}
                className="w-full py-[9px] pl-[40px] pr-[15px] bg-[#475059] border border-[#858f99] text-white rounded-xl outline-none placeholder:text-white"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-[15px] top-1/2 -translate-y-1/2" />
            </div>
            <div className="mt-4">
              <span className="flex items-center justify-between mb-4">
                <h3 className="text-white text-[12px] font-normal">{t.topProviders}</h3>
                <button className="text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </span>
              <ul className="space-y-4">
                {providers.map((provider, i) => (
                  <li key={provider.name} className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
                    {i % 2 === 0 ? (
                      <svg 
                        viewBox="0 0 86 86" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="27" 
                      height="27" 
                      className="mr-3"
                    >
                      <rect width="86" height="86" rx="20" fill="#fff" />
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M24.089 43.38c0-5.45 5.2-12.55 14.07-16.36 15.47-6.72 24.34-.51 26.62 5.32 2.16 5.45-2.16 15.21-9.38 22.31 5.2-3.8 9.51-7.73 12.42-11.66 3.93-5.2 5.58-10.14 4.06-14.07-2.16-5.71-10.9-7.61-21.81-6.09-10.91 1.52-19.27 4.31-25.99 7.86-7.59 3.81-11.4 8.25-12.03 13.45-.76 7.48 7.35 17.62 25.74 18.89 9.64.63 19.02.89 36.89-3.55-2.16.13-50.71 6.21-50.59-16.1z" 
                        fill="url(#paint0_linear)" 
                      />
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M43.338 53.13c5.83 0 10.52-4.69 10.52-10.52 0-5.83-4.69-10.53-10.52-10.53-5.83 0-10.52 4.69-10.52 10.52.12 5.84 4.81 10.53 10.52 10.53z" 
                        fill="url(#paint1_linear)" 
                      />
                      <defs>
                        <linearGradient id="paint0_linear" x1="43.339" y1="22.328" x2="43.339" y2="63.38" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A1CB42" />
                          <stop offset="1" stopColor="#12AA8B" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="43.338" y1="32.08" x2="43.338" y2="53.13" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A1CB42" />
                          <stop offset="1" stopColor="#12AA8B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    ) : (
                      <svg viewBox="0 0 86 86" xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" className="mr-3">
                        <rect width="86" height="86" rx="20" fill="#FFC71D"></rect>
                        <path d="M30.838 62.34V24.73s11.107-.528 16.36.612c7.57 1.65 9.612 10.742 4.168 16.387-.274.283-.53.575-.794.858 5.937 5.052 6.62 12.64 1.286 16.97-1.778 1.45-4.332 2.454-6.63 2.654-4.65.41-9.356.128-14.39.128zm7.824-16.68v10.66c2.992-.127 6.53 1.168 8.171-1.75 1.04-1.852 1.003-5.208-.009-7.114-1.641-3.091-5.189-1.422-8.162-1.796zm-.073-5.38c2.855-.037 5.964 1.04 7.305-1.934.757-1.66.72-4.377-.164-5.937-1.487-2.626-4.45-1.97-7.15-1.687.01 3.192.01 6.192.01 9.557z" fill="#fff"></path>
                      </svg>
                    )}
                    <span className="text-sm">{getProviderName(provider.name)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="w-[83%] px-[15px]">
          {/* Promotional Banners */}
          <div className="flex gap-4 mb-6 overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentBannerIndex * 50}%)` }}
            >
              {promotionalBanners.map((banner, index) => (
                <div key={index} className="relative w-1/2 flex-shrink-0 p-4">
                  <img 
                    src={banner.image} 
                    alt={banner.alt} 
                    width={600} 
                    height={200} 
                    className="w-full rounded-[20px] min-w-[100px]"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Game Navigation */}
          <div className="game-container bg-[#39414a] rounded-[20px] px-[20px] py-[30px]">
          <div className="flex items-center gap-4 mb-6 text-[15px] relative">
            <button 
              className="text-gray-400 hover:text-white sticky left-0 z-10 bg-[#525c66] border-[1px] border-[#858f99] rounded-xl w-[24px] h-[47px] flex items-center justify-center"
              onClick={() => handleScroll('left')}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div 
              ref={tabsContainerRef}
              className="flex items-center gap-4 overflow-x-auto scrollbar-hide"
            >
              {translatedTabs.map((tab) => (
                <button
                  key={tab}
                  className={`text-white hover:text-white px-4 pt-2 rounded whitespace-nowrap ${
                    selectedTab === tab ? 'pb-2 border-b-2 border-[#ffd700]' : 'pb-4 hover:pb-2 hover:border-b-2 hover:border-[#ffd700]'
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button 
              className="text-gray-400 hover:text-white sticky right-0 z-10 bg-[#525c66] border-[1px] border-[#858f99] rounded-xl w-[24px] h-[47px] flex items-center justify-center"
              onClick={() => handleScroll('right')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="ml-auto relative">
              <input
                type="text"
                placeholder={language === 'tr' ? 'Tümü' : 'All'}
                className="w-full py-[9px] pl-[40px] pr-[15px] bg-[#475059] border border-[#858f99] text-white rounded-xl outline-none placeholder:text-white"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-[15px] top-1/2 -translate-y-1/2" />
            </div>
          </div>
          {/* Games Grid */}
          <div className="grid grid-cols-3 gap-4">
            {games.map((game) => (
              <div key={game.title} className="relative group">
                <img src={game.image} alt={getGameTitle(game.title)} width={300} height={200} className="rounded-lg w-full" />
                <div className="bg-black bg-opacity-0 rounded-lg flex justify-between items-center">
                  <div className="p-4 text-white">
                    <span className="font-normal text-[13px]">
                      {getGameTitle(game.title)} - {getProviderName(game.provider)}
                    </span>
                  </div>
                  <button className="text-white p-1">
                    <svg 
                      viewBox="0 0 19 19" 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="18px" 
                      className="float-right cp"
                    >
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M12.11 4.005c-.966.042-1.665.337-2.394.929l-.216.183-.016-.014C8.618 4.343 7.83 4 6.64 4 4.403 4 3 5.806 3 8.086c0 2.87 2.84 5.525 6.215 6.86a.775.775 0 00.57 0C13.16 13.61 16 10.956 16 8.086 16 5.806 14.597 4 12.36 4l-.25.005zm.25 1.566c1.28 0 2.08 1.03 2.08 2.515l-.007.192c-.133 1.862-2.175 3.842-4.691 4.981l-.242.106-.242-.106C6.655 12.081 4.56 10.003 4.56 8.086c0-1.485.8-2.515 2.08-2.515.931 0 1.453.31 2.305 1.18a.776.776 0 001.11 0c.852-.87 1.374-1.18 2.305-1.18z" 
                        fill="#9DA8B3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </main>
      </div>
      <div className="bg-[#262d33] mx-auto mt-6 flex px-[32px] justify-center items-center h-[132px]">
        <div className='flex gap-[100px]'>
        <div>
          <svg viewBox="0 0 133 28" xmlns="http://www.w3.org/2000/svg" height="15px">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M10.524 27.58c7.44 1.871 14.974-2.693 16.828-10.193 1.855-7.5-2.672-15.098-10.11-16.968C9.803-1.451 2.27 3.114.415 10.615c-1.856 7.5 2.672 15.096 10.108 16.966zm6.429-19.107c1.923.668 3.33 1.67 3.054 3.533-.2 1.363-.95 2.023-1.946 2.255 1.367.717 2.063 1.818 1.4 3.725-.822 2.37-2.775 2.57-5.373 2.073l-.63 2.548-1.524-.383.622-2.513a56.913 56.913 0 01-1.214-.318l-.625 2.525-1.521-.383.63-2.552-.425-.111a66.959 66.959 0 00-.661-.171l-1.983-.499.757-1.758s1.122.301 1.107.279c.431.107.623-.176.698-.365l.996-4.027c.037.008.074.018.109.027l.053.013a1.253 1.253 0 00-.159-.051l.71-2.875c.02-.327-.092-.738-.709-.893.024-.017-1.107-.278-1.107-.278l.406-1.64 2.1.528v.008c.315.08.64.155.972.23l.624-2.522 1.523.383-.612 2.473c.409.094.82.19 1.22.29l.608-2.457 1.524.383-.624 2.523zm-4.82 9.15c1.244.33 3.96 1.054 4.393-.696.442-1.79-2.192-2.386-3.478-2.676-.144-.033-.27-.062-.375-.088l-.836 3.382c.085.021.185.048.297.077zm1.173-4.942c1.036.28 3.297.888 3.691-.703.402-1.627-1.795-2.117-2.868-2.357a13.12 13.12 0 01-.314-.072l-.759 3.066.25.066z" 
              fill="white"
            />
            <path 
              d="M40.692 8.47c1.126 0 2.099.204 2.916.603a5.88 5.88 0 012.043 1.63c.537.687.936 1.49 1.194 2.41.256.923.384 1.915.384 2.977 0 1.63-.296 3.171-.895 4.624-.598 1.455-1.41 2.716-2.443 3.793a11.489 11.489 0 01-3.655 2.548c-1.403.627-2.928.94-4.566.94-.212 0-.584-.006-1.11-.017a16.118 16.118 0 01-1.807-.158 21.076 21.076 0 01-2.162-.428 10.778 10.778 0 01-2.163-.779L34.508.855l5.446-.85-2.177 9.14a8.423 8.423 0 011.404-.495 6.19 6.19 0 011.511-.18zm-4.568 15.17a4.74 4.74 0 002.319-.603c.728-.4 1.356-.94 1.883-1.612a8.153 8.153 0 001.246-2.286c.304-.85.458-1.737.458-2.66 0-1.134-.188-2.018-.563-2.657-.374-.636-1.067-.957-2.073-.957-.33 0-.755.064-1.282.177a3.19 3.19 0 00-1.425.746l-2.318 9.707c.14.025.263.049.369.071.103.024.217.041.33.053.121.014.259.02.425.02l.631.001zm16.753 3.862h-5.202l4.393-18.636h5.237l-4.428 18.636zm2.53-20.907a3.21 3.21 0 01-1.968-.654c-.589-.434-.88-1.102-.88-2.003 0-.495.1-.96.297-1.398.201-.438.464-.814.793-1.134A3.887 3.887 0 0154.79.643a3.46 3.46 0 011.39-.282c.726 0 1.38.218 1.967.654.584.44.878 1.107.878 2.003 0 .497-.1.963-.3 1.4a3.689 3.689 0 01-1.93 1.895 3.402 3.402 0 01-1.387.282zm6.456-2.372l5.448-.851-1.338 5.493h5.835l-1.054 4.321h-5.8l-1.544 6.519a7.433 7.433 0 00-.246 1.523c-.025.473.034.88.175 1.223.14.343.39.608.755.795.363.19.882.286 1.564.286a8.26 8.26 0 001.636-.16 11.542 11.542 0 001.597-.443l.388 4.041c-.703.26-1.464.483-2.284.672-.822.19-1.794.282-2.918.282-1.616 0-2.869-.242-3.761-.723-.892-.486-1.522-1.148-1.899-1.988-.372-.835-.538-1.8-.491-2.885.048-1.089.21-2.233.491-3.438l3.446-14.667zm9.714 15.837c0-1.605.258-3.12.773-4.536a11.18 11.18 0 012.216-3.723c.958-1.06 2.124-1.899 3.498-2.515 1.367-.612 2.897-.92 4.584-.92 1.056 0 1.999.1 2.828.301a11.39 11.39 0 012.269.797l-1.794 4.112a16.7 16.7 0 00-1.458-.514c-.503-.156-1.118-.231-1.845-.231-1.736 0-3.108.603-4.13 1.806-1.017 1.204-1.53 2.824-1.53 4.856 0 1.204.258 2.178.775 2.923.515.745 1.465 1.116 2.846 1.116.681 0 1.339-.072 1.968-.212a9.647 9.647 0 001.688-.531l.388 4.216c-.657.257-1.383.49-2.179.693-.797.196-1.747.298-2.848.298-1.453 0-2.683-.214-3.69-.637-1.006-.428-1.838-.998-2.493-1.719a6.492 6.492 0 01-1.424-2.535 10.479 10.479 0 01-.442-3.045zm23.107 7.936c-1.241 0-2.32-.19-3.234-.568-.913-.378-1.668-.908-2.266-1.595-.598-.683-1.046-1.493-1.352-2.426-.307-.933-.455-1.966-.455-3.097 0-1.42.226-2.84.683-4.255a12.077 12.077 0 012.023-3.825 10.824 10.824 0 013.266-2.785c1.286-.719 2.764-1.08 4.425-1.08 1.22 0 2.292.191 3.219.569.923.377 1.683.91 2.284 1.594a6.916 6.916 0 011.35 2.428c.306.93.457 1.966.457 3.099a14.25 14.25 0 01-.665 4.254 12.316 12.316 0 01-1.969 3.826 10.338 10.338 0 01-3.25 2.78c-1.299.72-2.806 1.08-4.516 1.08zm2.6-15.164c-.771 0-1.453.225-2.037.671a5.777 5.777 0 00-1.474 1.702 8.438 8.438 0 00-.9 2.25 9.774 9.774 0 00-.296 2.32c0 1.183.19 2.103.561 2.766.377.66 1.054.991 2.039.991.774 0 1.452-.224 2.039-.674a5.8 5.8 0 001.474-1.7 8.46 8.46 0 00.9-2.25 9.904 9.904 0 00.296-2.321c0-1.18-.188-2.103-.563-2.765-.375-.659-1.056-.99-2.04-.99zm13.468 14.67h-5.205l4.392-18.636h5.24l-4.427 18.636zm2.528-20.907a3.204 3.204 0 01-1.967-.654c-.586-.434-.88-1.102-.88-2.003 0-.495.101-.96.299-1.398a3.705 3.705 0 011.934-1.897 3.437 3.437 0 011.386-.282c.727 0 1.384.218 1.969.654.585.44.881 1.107.881 2.003 0 .497-.105.963-.302 1.4a3.66 3.66 0 01-.788 1.135c-.33.318-.709.571-1.141.76a3.416 3.416 0 01-1.391.282zm5.648 3.118c.395-.116.836-.256 1.315-.409a17.285 17.285 0 011.62-.421 19.238 19.238 0 012.001-.321 22.332 22.332 0 012.511-.126c2.743 0 4.634.805 5.678 2.412 1.043 1.606 1.224 3.803.547 6.59L130.207 27.5h-5.235l2.319-9.85c.141-.616.252-1.21.334-1.791.083-.576.078-1.084-.019-1.523a1.823 1.823 0 00-.648-1.064c-.343-.271-.862-.407-1.565-.407-.678 0-1.368.073-2.072.215l-3.41 14.42h-5.238l4.255-17.787z" 
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 144 40" xmlns="http://www.w3.org/2000/svg" height="20px">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M.545 20.052a.833.833 0 00-.495 1.067l.524 1.44 3.985-3.986-4.014 1.479zm3.772 12.8l2.4 6.6a.839.839 0 001.072.497l2.648-.977-6.12-6.12zm35.633-5.635l-2.747-7.552-6.591 6.592 3.266-1.204a.83.83 0 011.07.494.832.832 0 01-.493 1.07l-4.15 1.53a.833.833 0 01-1.07-.493c-.002-.006 0-.01-.002-.016l-6.985 6.985 17.207-6.34a.83.83 0 00.495-1.066zm-.194-13.64L26.423.244a.834.834 0 00-1.178 0l-25 25a.834.834 0 000 1.178l13.333 13.333a.837.837 0 001.178.002l25-25a.836.836 0 000-1.18zm-30 9.513l-3.333 3.333a.837.837 0 01-1.18 0 .834.834 0 010-1.178l3.333-3.333a.834.834 0 011.18 1.178zm14.392 1.058c-.59.59-1.392.874-2.283.874-1.474 0-3.195-.772-4.635-2.213-1.054-1.054-1.794-2.314-2.082-3.547-.32-1.375-.057-2.572.742-3.372.798-.8 1.995-1.063 3.371-.741 1.234.288 2.494 1.026 3.547 2.081 2.315 2.314 2.905 5.354 1.34 6.918zm10.608-9.391l-3.333 3.333a.837.837 0 01-1.18 0 .834.834 0 010-1.178l3.333-3.333a.834.834 0 011.18 1.178zm28.324-3.882h3.984V29.5H63.08v-7.625h-7.096v7.75H52v-18.75h3.984v7.25h6.971v-7.25h.125zm19.42 4.25h2.864V29.5h-2.988l-.373-1.25C80.758 29.375 79.139 30 77.397 30a8.06 8.06 0 01-3.86-1c-1.12-.625-1.992-1.625-2.739-2.75a8.145 8.145 0 01-.996-3.875c0-1.375.374-2.75.996-3.875.623-1.125 1.494-2.125 2.74-2.75 1.244-.625 2.49-1 3.859-1 1.867 0 3.36.625 4.73 1.75l.374-1.375zM74.908 25.25c.747.75 1.618 1.125 2.739 1.125 1.12 0 2.116-.375 2.738-1.125.623-.75 1.12-1.75 1.12-2.875s-.373-2.125-1.12-2.875c-.747-.75-1.618-1.125-2.739-1.125-1.12 0-1.991.375-2.738 1.125-.747.75-1.12 1.75-1.12 2.875s.373 2.125 1.12 2.875zm23.652-10h3.984l-5.727 14.375h-3.61L87.48 15.25h4.109l3.485 9.625 3.486-9.625zm17.305-.125h2.863V29.5h-2.988l-.373-1.25c-1.245 1.125-2.864 1.75-4.607 1.75a8.062 8.062 0 01-3.859-1c-1.12-.625-1.992-1.625-2.739-2.75a8.15 8.15 0 01-.996-3.875c0-1.375.374-2.75.996-3.875.623-1.125 1.494-2.125 2.739-2.75 1.245-.625 2.49-1 3.859-1 1.868 0 3.362.625 4.731 1.75l.374-1.375zm-7.594 10.125c.747.75 1.618 1.125 2.738 1.125 1.121 0 2.117-.375 2.739-1.125.623-.75 1.121-1.75 1.121-2.875s-.374-2.125-1.121-2.875-1.618-1.125-2.739-1.125c-1.12 0-1.991.375-2.738 1.125-.747.75-1.121 1.75-1.121 2.875s.374 2.125 1.121 2.875zm14.192 4.375V10h3.859v19.625h-3.859zM144 22.375c0 .375 0 .75-.124 1.125h-10.831c.124 1 .498 1.75 1.12 2.25.623.5 1.37.75 2.365.75.623 0 1.245-.125 1.743-.5.498-.25.996-.75 1.245-1.25h4.109c-.498 1.625-1.37 2.875-2.739 3.75-1.37.875-2.739 1.5-4.358 1.5-1.369 0-2.614-.375-3.734-1-1.121-.625-1.992-1.625-2.739-2.75a8.14 8.14 0 01-.996-3.875c0-1.375.373-2.75.996-3.875.622-1.125 1.494-2.125 2.614-2.75a7.706 7.706 0 013.859-1c1.494 0 2.739.375 3.86 1 1.12.625 1.992 1.625 2.614 2.75a8.14 8.14 0 01.996 3.875zm-7.47-4.25c-.871 0-1.618.25-2.24.75-.623.5-.996 1.125-1.245 2h6.971c-.249-.875-.747-1.5-1.369-2-.498-.5-1.245-.75-2.117-.75z" 
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 168 28" xmlns="http://www.w3.org/2000/svg" height="20px">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M83.75 16.162c.377-4.801-1.89-8.181-6.007-8.873-1.133-.307-1.85-.307-3.06 0-4.08.73-6.497 4.34-5.93 8.873 1.208 5.262 6.044 7.76 10.841 5.531.642-.307 1.02-.46 1.474.23.415.654 1.17.692 1.85.385.643-.307.907-.845.87-1.537.037-1.536 0-3.072-.038-4.609zm-7.782 3.073c-1.965-.115-3.325-1.19-4.043-3.073-.377-2.804.492-4.647 2.494-5.57 1.85-.806 4.118-.191 5.364 1.499.907 1.19 1.02 2.535.718 3.994-.831 1.998-2.229 3.265-4.533 3.15zm91.95-3.073c.113-1.46.226-2.919-.529-4.263-1.209-3.112-3.816-4.955-7.064-4.917-3.211 0-5.818 1.882-7.027 4.994-.718 1.344-.604 2.765-.378 4.225.076 1.229.529 2.304 1.436 3.15 2.266 3.072 5.704 3.994 9.18 2.458.68-.308 1.095-.653 1.851.192 1.02 1.113 2.455.384 2.569-1.23.037-.614-.038-1.267-.038-1.92v-2.689zm-10.2 2.305c-.567-.807-1.096-1.575-1.662-2.382-.227-1.152-.114-2.266.226-3.38 2.456-3.226 5.063-3.341 7.934-.384.566 1.23.566 2.535.415 3.841-.529.768-1.058 1.498-1.586 2.266-1.776 1.076-3.552 1.037-5.327.039zm-14.127-6.568c-1.209-3.112-3.815-4.955-7.064-4.955-3.211 0-5.78 1.843-7.027 4.993-.189.461-.302.96-.529 1.345-.415.69-.604.268-.717-.193-.038-.883-.302-1.69-.945-2.343-1.586-2.804-4.042-3.994-7.102-3.725-3.06.268-5.251 1.92-6.384 4.878-.831 1.575-.604 3.303-.529 4.993v5.8c-.075.115-.075.23 0 .384v.384c0 .884 0 1.806.038 2.689-.189 1.19.453 1.882 1.549 1.844 1.02-.039 1.775-.576 1.473-1.844.264-.883.227-1.767 0-2.65.038-.768.076-1.498.113-2.266 4.798 2.227 8.349 1.46 10.805-2.344a4.274 4.274 0 001.02-2.304c.302-.461.642-.461.944 0 .113.883.378 1.69 1.02 2.304 2.493 3.803 5.818 4.533 10.88 2.344 1.095 1.728 1.964 1.728 3.022-.039 0-1.152 0-2.305.038-3.457v-1.536c.037-1.498.113-2.958-.605-4.302z" 
              fill="white"
            />
            <path 
              d="M88.55 17.66v.461l-.454-.23.454-.23zm-67.016 6.568c-1.7-.538-3.173-1.537-4.155-3.111-.718-.576-.982-1.422-1.133-2.305a7.135 7.135 0 01-.303-3.457V6.521c-.075-.692-.188-1.383-.264-2.075-.642-1.075-1.209-2.227-2.871-2.15 3.626-3.457 9.142-2.843 11.409 1.113.49.615.793 1.306.755 2.151.491.769.416 1.652.34 2.497v13.06c.302 4.302.567 4.532-3.778 3.11zm-9.144-7.683c.039 3.688-.188 3.88-3.74 2.574-1.926-.692-3.626-1.805-4.608-3.726-.793-1.037-1.095-2.19-1.02-3.457 0-.5 0-1.037.038-1.536V6.175c-.189-.769-.378-1.498-.567-2.267C1.851 3.063 1.133 2.41 0 2.372 2.493-1.392 9.784-.24 11.258 3.486c.68.768.793 1.69.944 2.65.264.653.189 1.306.113 1.96v7.297c.038.384.076.768.076 1.152zm26.027 10.334c0 .614-.037 1.075-.869 1.114-3.74.192-8.008-3.419-8.537-7.26a3.682 3.682 0 01-.038-1.92V7.673c-.151-1.152-.34-2.266-.491-3.418-.415-1.152-1.247-1.882-2.493-2.036 2.833-3.88 10.2-2.228 11.446 1.537.642 1.075.945 2.227.869 3.495v.768c.076.115.076.23 0 .384v8.489a.292.292 0 010 .346v3.111l.113 6.53z" 
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 158 20" xmlns="http://www.w3.org/2000/svg" height="15px">
            <path d="M123.575 0c1.784 0 3.278.577 4.484 1.779 1.205 1.202 1.784 2.692 1.784 4.471s-.579 3.27-1.784 4.471c-1.206 1.202-2.7 1.779-4.484 1.779h-5.159v7.452h-2.025V0h7.184zm0 10.673c1.253 0 2.266-.433 3.085-1.25.82-.817 1.206-1.875 1.206-3.173s-.386-2.308-1.206-3.173c-.819-.817-1.832-1.25-3.085-1.25h-5.159v8.798h5.159v.048zM143.198 20l-1.88-4.904h-9.499L129.939 20h-2.121l7.714-20h2.073l7.715 20h-2.122zm-10.655-6.779h8.1l-4.05-10.673-4.05 10.673zM158 0l-7.232 11.779V20h-2.025v-8.27L141.51 0h2.267l5.978 9.808L155.734 0H158zM16.49 0l-6.461 6.683L3.568 0H0v12.933l1.591 1.73 1.736-1.874V5.72l6.509 6.106h.386l6.508-6.058v4.183l1.736-1.923 1.591 1.73V0H16.49zm1.976 10.625l-1.736 1.923V20h3.327v-7.644l-1.59-1.731zm-16.875 6.73L0 15.578V20h3.327v-4.567L1.59 17.356zm38.186-.24C37.85 19.04 35.487 20 32.641 20c-2.796 0-5.158-.962-7.135-2.885-1.929-1.923-2.893-4.278-2.893-7.115 0-2.788.964-5.144 2.893-7.115C27.434.962 29.796 0 32.642 0c2.796 0 5.158.962 7.135 2.885C41.706 4.808 42.67 7.163 42.67 10c0 2.789-.964 5.144-2.893 7.115zm-12.005-2.163c1.302 1.298 2.94 1.971 4.87 1.971 1.928 0 3.567-.673 4.87-1.971 1.301-1.298 1.976-2.98 1.976-4.952 0-1.971-.675-3.654-1.977-4.952s-2.94-1.971-4.87-1.971c-1.928 0-3.567.673-4.87 1.971-1.301 1.298-1.976 2.98-1.976 4.952 0 1.971.675 3.654 1.977 4.952zM57.376 0h3.278v20H58.1L48.65 6.442V20h-3.327V0h2.507l9.547 13.654V0zm21.889 0v3.125H72.95V20h-3.28V3.125h-6.364V0h15.96zM93.44 20l-4.243-7.308h-3.905V20h-3.327V0h8.004c1.784 0 3.327.625 4.58 1.875 1.254 1.25 1.88 2.788 1.88 4.567 0 1.298-.385 2.452-1.108 3.51a6.214 6.214 0 01-2.893 2.308l4.532 7.788h-3.52V20zM85.292 3.077V9.76h4.725c.868 0 1.64-.337 2.218-.962a3.428 3.428 0 00.916-2.356c0-.913-.29-1.73-.916-2.355-.627-.625-1.35-.962-2.218-.962h-4.725v-.048zM112.196 20l-1.398-4.039h-8.583L100.817 20h-3.568l7.281-20h3.953l7.233 20h-3.52zm-8.872-7.115h6.365l-3.182-9.039-3.183 9.039z" 
              fill="white" />
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 94 26" xmlns="http://www.w3.org/2000/svg" height="20px">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M89.672 9.737c-.905.402-1.811.703-2.717.904l-1.61.402c-.805.2-1.41.501-1.812.903-.302.502-.503 1.004-.503 1.506 0 .602.201 1.204.604 1.706.402.402 1.006.603 1.811.603 1.309 0 2.315-.402 3.02-1.105.704-.702 1.107-1.807 1.107-3.112V9.737h.1zm1.107 8.634a8.579 8.579 0 01-3.12.903c-.905.1-1.912.2-2.918.2-1.61 0-3.12-.501-4.328-1.404-1.207-.904-1.912-2.41-1.912-4.518 0-2.008.604-3.413 1.711-4.216 1.107-.803 2.617-1.405 4.328-1.707.301 0 .603 0 .805-.1.402-.1.704-.1 1.107-.2 2.013-.302 3.02-.904 3.02-1.808 0-.702-.403-1.204-1.108-1.405a6.527 6.527 0 00-2.013-.301c-.604 0-1.207.1-1.71.3a1.99 1.99 0 00-1.108 1.105h-4.63c.202-1.405.806-2.71 1.913-3.614C82.024.502 83.836 0 86.15 0c2.617 0 4.529.402 5.837 1.305C93.296 2.208 94 3.514 94 5.22v6.425c0 1.907-.302 3.313-1.006 4.417-.403 1.004-1.208 1.807-2.215 2.309zm-22.644.803v-9.035c0-1.807.302-3.413.805-4.618.503-1.204 1.208-2.208 2.214-3.011a8.206 8.206 0 013.12-1.506C75.482.703 76.69.502 77.897.502h.604v5.02h-1.61c-1.309 0-2.315.3-3.02 1.003-.603.703-1.006 1.707-1.006 3.112v9.637l-4.73-.1zM62.9 9.737c-.905.402-1.811.703-2.717.904l-1.61.402c-.805.2-1.41.501-1.812.903-.302.502-.503 1.004-.503 1.506 0 .602.201 1.204.604 1.706.403.402 1.006.603 1.812.603 1.308 0 2.314-.402 3.019-1.105.704-.702 1.107-1.807 1.107-3.112l.1-1.807zm1.108 8.634a8.58 8.58 0 01-3.12.903c-.906.1-1.913.2-2.919.2-1.61 0-3.12-.501-4.328-1.404-1.207-.904-1.912-2.41-1.912-4.518 0-2.008.604-3.413 1.711-4.216 1.107-.803 2.617-1.405 4.328-1.707.302 0 .604 0 .805-.1.402-.1.704-.1 1.107-.2 2.013-.302 3.02-.904 3.02-1.808 0-.702-.403-1.204-1.108-1.405a6.527 6.527 0 00-2.013-.301c-.604 0-1.207.1-1.71.3a1.997 1.997 0 00-1.108 1.105h-4.428c.201-1.405.805-2.71 1.912-3.614C55.454.502 57.266 0 59.58 0c2.617 0 4.53.402 5.838 1.305 1.308.903 2.012 2.209 2.012 3.915v6.425c0 1.907-.302 3.313-1.006 4.417-.604 1.004-1.409 1.807-2.415 2.309zm-17.31-8.533c0-1.807-.303-3.213-1.007-4.216-.705-1.004-1.711-1.506-3.02-1.506-1.207 0-2.214.502-2.918 1.506-.604.903-1.007 2.309-1.007 4.216 0 1.807.302 3.112 1.007 4.015.704 1.004 1.71 1.506 3.019 1.506 1.107 0 2.214-.502 2.818-1.506.704-1.004 1.107-2.309 1.107-4.015zM38.746 23.59c0 .602-.201 1.204-.704 1.706-.403.502-1.007.703-1.711.703h-2.315V8.533c0-3.313.906-5.521 2.818-6.726C38.647.602 40.861 0 42.975 0c1.207 0 2.415.2 3.522.703a6.708 6.708 0 012.818 1.907c1.409 1.807 2.113 4.216 2.113 7.027 0 2.911-.704 5.32-2.113 7.128-1.41 1.806-3.12 2.71-5.334 2.71-1.007 0-2.114-.2-3.02-.602-.905-.502-1.71-1.205-2.214-2.209v6.927zM28.884 9.737c-.905.402-1.811.703-2.717.904l-1.61.301c-.805.2-1.41.502-1.812.904-.302.502-.503 1.003-.503 1.505 0 .603.201 1.205.604 1.707.402.402 1.006.602 1.811.602 1.309 0 2.315-.401 3.02-1.104.704-.703 1.107-1.807 1.107-3.112l.1-1.707zm1.107 8.634a8.579 8.579 0 01-3.12.903c-.905.1-1.912.2-2.918.2-1.61 0-3.12-.501-4.328-1.404-1.207-.904-1.912-2.41-1.912-4.518 0-2.008.604-3.413 1.711-4.216 1.107-.803 2.617-1.405 4.328-1.707.302 0 .604 0 .805-.1.302-.1.704-.1 1.107-.2 2.013-.302 3.02-.904 3.02-1.808 0-.702-.404-1.204-1.108-1.405a6.527 6.527 0 00-2.013-.301c-.604 0-1.207.1-1.71.3a1.994 1.994 0 00-1.108 1.105h-4.63c.202-1.405.806-2.71 1.913-3.614C21.235.502 23.048 0 25.362 0c2.617 0 4.529.402 5.837 1.305 1.308.903 2.013 2.209 2.013 3.915v6.425c0 1.907-.302 3.313-1.006 4.417-.403 1.004-1.208 1.807-2.215 2.309zm-25.26 5.22c0 .602-.202 1.204-.705 1.706-.403.502-1.007.703-1.711.703H0V8.533C0 5.22.906 3.012 2.818 1.807 4.63.602 6.844 0 8.958 0c1.207 0 2.415.2 3.522.703a6.708 6.708 0 012.818 1.907c1.409 1.807 2.113 4.216 2.113 7.027 0 2.911-.704 5.32-2.113 7.128-1.41 1.806-3.12 2.71-5.334 2.71-1.007 0-2.114-.2-3.02-.602-.905-.502-1.71-1.205-2.214-2.209v6.927zm7.85-13.753c0-1.807-.303-3.213-1.007-4.216-.705-1.004-1.711-1.506-3.02-1.506-1.207 0-2.214.502-2.918 1.506-.604.903-1.006 2.309-1.006 4.216 0 1.807.301 3.112 1.006 4.015.704 1.004 1.71 1.506 3.02 1.506 1.106 0 2.213-.502 2.817-1.506.805-1.004 1.107-2.309 1.107-4.015z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg viewBox="0 0 96 28" xmlns="http://www.w3.org/2000/svg" height="20px">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M9.266 10.81L3.125 3.244 8.62 17.946 26.613 0 9.266 10.81zm9.05-.756L0 28l17.563-10.919 6.357 7.351-5.603-14.378zm17.67 6.378l1.186-1.08 7.111 6.918-1.293 1.298-7.003-7.136zM57.968 3.784h-8.511v19.784h1.939V15.35h5.603l4.525 8.217h2.155l-4.74-8.217c8.296-4.216 2.477-11.567-.97-11.567zm-.001 1.73h-6.573v8.108h6.573c5.71-1.73 2.801-8.108 0-8.108zM40.62 22.668a10.165 10.165 0 01-4.85 1.224c-5.653 0-10.236-4.598-10.236-10.27 0-5.673 4.583-10.27 10.236-10.27 5.653 0 10.236 4.597 10.236 10.27 0 2.385-.81 4.58-2.17 6.324l-1.403-1.364a8.306 8.306 0 001.633-4.96c0-4.598-3.715-8.325-8.297-8.325-4.582 0-8.296 3.727-8.296 8.325 0 4.597 3.715 8.324 8.296 8.324a8.243 8.243 0 003.419-.737l1.432 1.459zM73.374 8.324L70.68 3.676h-6.25l5.819 9.838-5.818 10.054h6.249L82.209 3.676h-5.926l-2.91 4.648zm3.77 6.379l-3.016 5.08 2.155 3.785h5.926l-5.064-8.865zm6.789-11.027h5.602v14.378H96v5.514H83.933V3.676z" 
              fill="white"
            />
          </svg>
        </div>
        </div>
      </div>
      <div className="px-5 mx-auto" style={{ maxWidth: '1200px', minWidth: '1200px' }}>
        <div className="container mx-auto flex items-center justify-between py-[30px] border-b-[1px] border-white border-opacity-10">
          <div className="text-[#1fd18d] text-2xl font-bold flex items-center">
            <svg viewBox="0 0 202 29" xmlns="http://www.w3.org/2000/svg" height="30">
              <path fillRule="evenodd" clipRule="evenodd" d="M54.267 3.458c.085-.085.169-.169.27-.253L52.025.708A2.331 2.331 0 0050.338 0c-.64 0-1.23.253-1.686.708-.927.928-.944 2.446-.017 3.374l2.53 2.53c.084-.101.168-.202.253-.287l2.85-2.867zm7.824 6.797l.05-.202a2.434 2.434 0 00-.37-1.805l-.337-.489-2.344-3.002a2.483 2.483 0 00-1.821-.962 2.5 2.5 0 00-1.94.725l-2.428 2.413-.438.438a2.4 2.4 0 00-.22 3.154c.068.101.153.186.22.253.186.186.388.32.607.439a2.47 2.47 0 002.816-.472l.405-.388a.812.812 0 01.54-.22h.067c.22.017.421.135.556.32l.32.456c.76 1.13 2.26 1.434 3.356.692.472-.32.81-.776.961-1.316v-.034zM51.57 12.01a2.398 2.398 0 01-3.457.506 1.618 1.618 0 01-.075-.085 1.486 1.486 0 00-.076-.084l-3.81-3.829h-.018a2.409 2.409 0 01.017-3.373 2.398 2.398 0 013.39-.017v.017l2.866 2.867a3.882 3.882 0 00-.152 1.08c0 .843.287 1.686.793 2.361.118.152.236.287.354.405.05.05.101.101.168.152zm-4.704 4.773c.455-.472.691-1.08.691-1.704 0-.607-.219-1.214-.691-1.652l-3.81-3.813v-.016l-.018-.017a2.331 2.331 0 00-1.686-.709 2.37 2.37 0 00-1.703.709 2.38 2.38 0 00-.169 3.188l4.199 4.2a2.38 2.38 0 003.187-.186zM31.79 7.22l-3.39 3.39-.37-.37a2.371 2.371 0 01-.708-1.704c0-.641.253-1.248.708-1.687a2.36 2.36 0 011.686-.708 2.4 2.4 0 011.703.708l.371.371zm27.182 16.783l2.765-2.547c2.698-2.48 3.153-6.578 1.231-9.597-.27.37-.59.691-.978.961a3.806 3.806 0 01-2.175.675 3.954 3.954 0 01-3.086-1.467 3.898 3.898 0 01-3.844.742c-.009.008-.013.02-.017.033a.083.083 0 01-.017.034 5.001 5.001 0 01-.472.574 3.893 3.893 0 01-2.766 1.147c-.185 0-.387-.017-.573-.051a3.92 3.92 0 01-1.096 3.34 3.922 3.922 0 01-5.244.27c-.034-.017-.05-.034-.068-.05l-4.266-4.268-1.045-1.046-3.39 3.39 7.521 7.523a12.621 12.621 0 0017.52.337z" fill="#00C683" />
              <path fillRule="evenodd" clipRule="evenodd" d="M121.616 4.89c0 .59.217 1.086.651 1.489.434.388.992.59 1.69.605.697 0 1.255-.217 1.69-.62.434-.404.651-.931.651-1.551 0-.574-.217-1.055-.651-1.443-.435-.387-1.008-.573-1.69-.573-.698 0-1.256.201-1.69.604-.434.404-.651.9-.651 1.49zm4.201 3.893h-3.752v12.95h3.752V8.782zm-24.96 1.876a5.378 5.378 0 00-2.326-2.264c-.992-.512-2.155-.775-3.473-.775-1.302 0-2.465.263-3.457.775a5.547 5.547 0 00-2.325 2.264c-.558.993-.837 2.187-.837 3.583v7.49h3.798v-3.101h5.659v3.101h3.798v-7.49c0-1.396-.279-2.59-.837-3.583zm-2.962 3.117v1.908h-5.643v-1.907c0-1.008.248-1.753.745-2.28.496-.512 1.178-.776 2.061-.776.884 0 1.566.248 2.078.776.511.527.76 1.287.76 2.28zM85.99 17.934c0-.838-.217-1.551-.636-2.125-.418-.59-1.023-1.008-1.798-1.303.558-.31.992-.713 1.287-1.225.294-.511.45-1.1.45-1.752 0-1.117-.466-2-1.396-2.652-.93-.667-2.279-.993-4.062-.993h-7.07v13.85h7.458c1.876 0 3.302-.326 4.294-.993.977-.667 1.473-1.598 1.473-2.807zm-9.473-4.467v-2.915h2.838c.697 0 1.24.124 1.597.372.356.248.542.62.542 1.101 0 .465-.186.822-.558 1.07-.357.248-.9.372-1.581.372h-2.838zm3.427 2.544c1.473 0 2.217.511 2.217 1.52 0 1.023-.729 1.52-2.217 1.504H76.5V16.01h3.442zm25.317-8.127h3.798v5.289h5.628v-5.29h3.798v13.834h-3.798v-5.475h-5.628v5.49h-3.798V7.883zm25.487 13.694c-1.069-.279-1.922-.636-2.558-1.085l1.318-2.823c.62.419 1.349.744 2.186.993.837.248 1.69.356 2.543.356.806 0 1.379-.108 1.736-.325.357-.217.543-.512.543-.884 0-.419-.217-.73-.667-.93-.45-.202-1.163-.404-2.139-.59a19.704 19.704 0 01-2.652-.714 4.51 4.51 0 01-1.798-1.21c-.512-.558-.76-1.333-.76-2.31 0-.868.248-1.628.745-2.31.496-.668 1.209-1.195 2.155-1.583.945-.372 2.046-.558 3.302-.558.93 0 1.829.093 2.713.295.884.201 1.643.496 2.279.9l-1.225 2.822c-1.147-.713-2.465-1.055-3.922-1.055-.791 0-1.365.124-1.737.341-.372.233-.558.543-.558.931 0 .419.217.729.667.915.449.186 1.163.388 2.139.574 1.055.217 1.938.465 2.636.713a4.298 4.298 0 011.798 1.21c.512.558.76 1.302.76 2.248 0 .884-.248 1.66-.729 2.327-.496.667-1.209 1.194-2.155 1.582-.945.372-2.062.558-3.364.558a12.084 12.084 0 01-3.256-.388zm18.915-3.086a6.664 6.664 0 002.651 2.512c1.131.605 2.403.915 3.783.947 2.341 0 4.139-.73 5.395-2.172l-1.489-1.52c-1.054 1.102-2.325 1.66-3.829 1.66-.977 0-1.86-.217-2.636-.651a4.743 4.743 0 01-1.829-1.8c-.45-.76-.667-1.612-.667-2.558 0-.962.233-1.83.667-2.59a4.705 4.705 0 011.829-1.784c.776-.418 1.659-.636 2.636-.636 1.535 0 2.806.543 3.829 1.629l1.489-1.52c-1.241-1.427-3.039-2.14-5.395-2.14-1.396 0-2.652.31-3.783.915-1.117.605-2.016 1.442-2.651 2.512-.636 1.07-.962 2.264-.962 3.598s.326 2.528.962 3.598zm16.96 2.512c-1.131-.604-2.031-1.442-2.666-2.512-.636-1.07-.961-2.264-.961-3.598s.325-2.528.961-3.598c.635-1.07 1.535-1.907 2.666-2.512 1.132-.605 2.403-.915 3.799-.915 1.411 0 2.682.31 3.814.915a6.683 6.683 0 012.651 2.512c.635 1.07.961 2.264.961 3.598s-.326 2.528-.961 3.598c-.636 1.07-1.535 1.908-2.651 2.512-1.132.605-2.403.915-3.814.915-1.396 0-2.667-.31-3.799-.915zm6.388-1.752a4.665 4.665 0 001.814-1.784 5.09 5.09 0 00.666-2.574c0-.961-.217-1.814-.666-2.574a4.665 4.665 0 00-1.814-1.784c-.775-.434-1.644-.651-2.605-.651-.961 0-1.829.217-2.604.651a4.665 4.665 0 00-1.814 1.784 5.094 5.094 0 00-.667 2.574c0 .962.217 1.815.667 2.575a4.665 4.665 0 001.814 1.783c.775.434 1.643.651 2.604.651.977-.015 1.845-.232 2.605-.651zm28.355-6.095c0-1.721-.434-3.04-1.317-3.939-.884-.9-2.109-1.35-3.675-1.365-.992 0-1.876.186-2.666.559a4.46 4.46 0 00-1.876 1.581c-.419-.697-.977-1.24-1.69-1.597s-1.55-.543-2.496-.543c-.868 0-1.643.155-2.357.45a4.65 4.65 0 00-1.752 1.318V8.054h-2.279v13.678h2.326v-8.328c0-1.194.31-2.078.93-2.652.62-.573 1.442-.868 2.465-.868 1.008 0 1.783.28 2.341.837.558.574.837 1.443.837 2.606v8.405h2.326v-8.328c0-1.194.295-2.078.899-2.652.589-.573 1.411-.868 2.434-.868 1.008 0 1.799.28 2.372.837.574.574.853 1.443.853 2.606v8.39h2.325v-8.56z" fill="#fff" />
              <path d="M144.266 16.987a1.737 1.737 0 100-3.475 1.737 1.737 0 000 3.475z" fill="#00C683" />
              <path fillRule="evenodd" clipRule="evenodd" d="M36.12 11.829a2.4 2.4 0 000-3.407 2.399 2.399 0 00-1.703-.709 2.36 2.36 0 00-1.687.709l-5.328 5.33a1.27 1.27 0 01-1.417.287 1.263 1.263 0 01-.792-1.181 2.4 2.4 0 00-.708-1.704 2.331 2.331 0 00-1.686-.708h-.051a2.07 2.07 0 01-1.417-.59 2.067 2.067 0 01-.607-1.468 2.509 2.509 0 00-.708-1.687 2.331 2.331 0 00-1.686-.708h-.017a2.013 2.013 0 01-2.04-2.041 2.4 2.4 0 00-.708-1.704 2.398 2.398 0 00-3.406 0l-8.347 8.333L2.193 12.2a7.536 7.536 0 00-2.192 5.465c.05 2.075.894 3.98 2.411 5.38l2.766 2.548a12.621 12.621 0 0017.52-.338L36.12 11.83zM6.864 5.402l1.619-1.619a.91.91 0 00-.641-.354A3.891 3.891 0 003.626 5.52c0 .009-.004.013-.008.017-.004.005-.008.009-.008.017l-2.412 5.313c-.05.085-.067.186-.084.287l.017-.017 1.787-1.804 1.906-1.89 1.635-1.636.405-.405z" fill="#00C683" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-transparent text-white py-2 flex items-center h-[49px] rounded-2xl hover:bg-white hover:bg-opacity-10">
              <img src={button1} alt="Add Money" className='h-[48px]' />
            </button>
            <button className="bg-transparent text-white py-2 flex items-center h-[49px] rounded-2xl hover:bg-white hover:bg-opacity-10">
              <img src={button2} alt="Extract Money" className='h-[48px]' />
            </button>
          </div>
        </div>
        <div className="flex pt-[40px] pb-[60px] text-[21px] w-fit">
          {/* Column 1 */}
          <div className="border-r border-white border-opacity-10 pr-8 w-fit">
            <ul className="space-y-6 w-fit">
              <li className='w-fit'><button className="text-white hover:text-opacity-80 font-normal text-left">{t.aboutUs}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 font-normal text-left">{t.termsOfService}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 font-normal text-left">{t.privacyPolicy}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 font-normal text-left">{t.responsibleGaming}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 font-normal text-left">{t.kycPolicies}</button></li>
              <li className="pt-[48px]"><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.loginRegister}</button></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="border-r border-white border-opacity-10 pr-8 pl-[112px] w-fit">
            <h3 className="text-white font-medium mb-3">{t.responsibility}</h3>
            <ul className="space-y-3 w-fit">
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.bonusRules}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.selfExclusion}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.antiMoneyLaundering}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.fairnessAndRNG}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.disputeResolution}</button></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="border-r border-white border-opacity-10 pr-8 pl-[112px] w-fit">
            <h3 className="text-white font-medium mb-3">{t.games}</h3>
            <ul className="space-y-3 w-fit">
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.sportsbook}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.esport}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.slot}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.liveCasino}</button></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="pl-[112px] w-fit">
            <h3 className="text-white font-medium mb-3">{t.contact}</h3>
            <ul className="space-y-3 w-fit">
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.callYou}</button></li>
              <li className='w-fit'><button className="text-white hover:text-opacity-80 text-[15px] font-normal text-left">{t.contactUs}</button></li>
              <div className="pt-[24px] pb-[48px]">
                <div className="flex items-center justify-center bg-[#008758] h-[48px] rounded-2xl text-white w-fit px-4">
                  <svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg" width="19px">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M9.019 5.385l-.011.004V1.346A1.35 1.35 0 007.656 0H1.351C.605 0 0 .603 0 1.346v4.039C0 6.128.605 6.73 1.351 6.73h5.866L8.25 7.76a.451.451 0 00.769-.317V5.385zm-4.516-.449c-1.06 0-1.947-.53-2.627-1.546a.448.448 0 01.125-.622.451.451 0 01.625.124c.52.779 1.136 1.147 1.877 1.147.74 0 1.356-.368 1.877-1.147a.451.451 0 01.624-.124.448.448 0 01.125.622c-.68 1.016-1.566 1.546-2.626 1.546z" 
                      fill="#fff"
                    />
                  </svg>
                  <span className="pl-3">{t.support}</span>
                </div>
              </div>
              <SocialMediaLinks />
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 mx-auto" style={{ maxWidth: '1200px', minWidth: '1200px' }}>
        <div className="p-[40px] flex items-center text-white text-[11px]">
          <img src="https://seal.cgcb.info/1c0246df-1aa7-485a-a24c-21ae5e730000" alt="CGCB Seal" />
          <span className="ml-4">
            {language === 'tr' ? (
              'Bahis.com, Socas International B.V. şirketine bağlı olarak Dr. M. J.Hugenholtzweg 25, Willemstad, Curacao adresinde kayıtlı özel bir şirkettir. Socas International B.V., GLH-OCCHKTW0708022022 lisans numarası altında Bahis.com olarak Curaçao Hükümeti tarafından yetkilendirilmiş Curaçao eGaming tarafından lisanslanmıştır ve düzenlenmiştir.'
            ) : (
              'Bahis.com is a private company registered at Dr. M. J.Hugenholtzweg 25, Willemstad, Curacao, under Socas International B.V. Socas International B.V. is licensed and regulated by Curaçao eGaming, authorized by the Government of Curaçao under license number GLH-OCCHKTW0708022022 as Bahis.com.'
            )}
          </span>
        </div>
      </div>
    </div>
  )
}