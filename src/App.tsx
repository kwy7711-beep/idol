import { useState } from 'react';
import { ChevronRight, Globe, Search, PlayCircle, Terminal, X, LockKeyhole, UnlockKeyhole } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('program');
  const [showSecret, setShowSecret] = useState(false);
  
  const [posts, setPosts] = useState([
    { id: 1248, title: '솔직히 한지오 저거 진짜로 당황한 표정 아님? ㅋㅋㅋ', author: 'ㅇㅇ', date: '10:42', views: 341, comments: 15 },
    { id: 1247, title: '정아라 완전 비즈니스 모드 개웃기네 진짜 본받고 싶다', author: '알바생', date: '10:35', views: 210, comments: 8 },
    { id: 1246, title: '근데 둘이 뭔가 초면 아닌 거 같은데 기분탓임?', author: '코난', date: '10:15', views: 952, comments: 42 },
    { id: 1245, title: '한지오 무리수 두는거 보소 ㅋㅋㅋㅋ 하차 각이냐?', author: '불편러', date: '09:50', views: 88, comments: 0 },
    { id: 1244, title: '둘이 오늘 티키타카 개재밌었음 ㅋㅋㅋ 다음주 예고편 미쳤다', author: '망붕러', date: '09:12', views: 142, comments: 5 },
    { id: 1243, title: '혹시 작가가 안티냐? 대본 존나 매운맛이네 ㅋㅋㅋㅋ', author: '과몰입', date: '08:45', views: 425, comments: 11 }
  ]);
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [postInput, setPostInput] = useState('');

  const handlePostSubmit = () => {
    if (!postInput.trim()) return;
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    const date = new Date();
    const timeStr = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    
    setPosts([
      { id: newId, title: postInput, author: '익명', date: timeStr, views: 0, comments: 0 },
      ...posts
    ]);
    setPostInput('');
    setShowWriteModal(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_-20%,#1a1a2e_0%,#050508_70%)] bg-[#050508] font-sans text-white flex flex-col">
      {/* 1. 글로벌 탑바 (Global Top Bar) */}
      <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md relative z-10 shrink-0">
        
        {/* 모바일 버전 탑바 */}
        <div className="md:hidden flex flex-col w-full">
          <div className="flex items-center justify-between px-4 h-12 border-b border-white/5">
            <span className="text-[#ff3e81] font-extrabold text-lg tracking-tighter flex items-center">
              JBC<span className="bg-[#ff3e81] text-white px-1.5 py-[2px] rounded-[2px] ml-1.5 font-bold text-[9px] tracking-normal mb-0.5">Plus</span>
            </span>
            <div className="flex items-center gap-4 text-[13px] text-white/80 font-medium">
              <a href="#" className="hover:text-white">로그인</a>
              <div className="flex items-center gap-1 cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-[#ff3e81]" />
                <span className="text-[10px]">▼</span>
              </div>
            </div>
          </div>
          <div className="flex items-center px-4 h-10 overflow-x-auto whitespace-nowrap scrollbar-hide text-[12px] text-white/70 gap-4">
            <a href="#" className="hover:text-white">편성표</a>
            <a href="#" className="hover:text-white">온에어</a>
            <a href="#" className="hover:text-white">채널번호</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white">JBC</a>
            <a href="#" className="hover:text-white">스튜디오 프라임</a>
          </div>
        </div>

        {/* 데스크탑 버전 탑바 */}
        <div className="hidden md:flex max-w-[1200px] mx-auto px-4 h-10 items-center justify-between text-sm text-white/70">
          <div className="flex items-center gap-4 font-semibold shrink-0">
            {/* 로고 자리 (예: SBS Plus) */}
            <span className="text-[#ff3e81] font-extrabold text-lg mr-4 tracking-tighter flex items-center">
              JBC<span className="bg-[#ff3e81] text-white px-1 py-[2px] rounded-[2px] ml-2 font-bold text-[10px] tracking-normal mb-[2px]">Plus</span>
            </span>
            <a href="#" className="hover:text-white border-r border-white/10 pr-4 transition-colors">편성표</a>
            <a href="#" className="hover:text-white border-r border-white/10 pr-4 transition-colors">온에어</a>
            <a href="#" className="hover:text-white transition-colors">채널번호</a>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a href="#" className="hover:text-white border-r border-white/10 pr-4 transition-colors">JBC</a>
            <a href="#" className="hover:text-white border-r border-white/10 pr-4 transition-colors">스튜디오 프라임</a>
            <a href="#" className="hover:text-white border-r border-white/10 pr-4 transition-colors">로그인</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <Globe className="w-4 h-4 text-[#ff3e81]" />
              <span>언어 선택</span>
              <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 메인 네비게이션바 (Main Navigation) */}
      <div className="w-full border-b border-white/10 text-white/70">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center h-14 md:h-16 overflow-x-auto whitespace-nowrap scrollbar-hide font-medium">
          <button onClick={() => setActiveTab('program')} className={`text-lg px-2 mr-6 hover:text-white transition-colors h-full flex items-center cursor-pointer ${activeTab === 'program' ? 'font-bold border-b-2 border-[#ff3e81] text-white pb-[2px]' : ''}`}>프로그램 정보</button>
          <button onClick={() => setActiveTab('character')} className={`text-lg px-2 mr-6 hover:text-white transition-colors h-full flex items-center cursor-pointer ${activeTab === 'character' ? 'font-bold border-b-2 border-[#ff3e81] text-white pb-[2px]' : ''}`}>캐릭터(출연진) 소개</button>
          <button onClick={() => setActiveTab('clip')} className={`text-lg px-2 mr-6 hover:text-white transition-colors h-full flex items-center cursor-pointer ${activeTab === 'clip' ? 'font-bold border-b-2 border-[#ff3e81] text-white pb-[2px]' : ''}`}>명장면 클립</button>
          <button onClick={() => setActiveTab('community')} className={`text-lg px-2 mr-6 hover:text-white transition-colors h-full flex items-center cursor-pointer ${activeTab === 'community' ? 'font-bold border-b-2 border-[#ff3e81] text-white pb-[2px]' : ''}`}>커뮤니티</button>
        </div>
      </div>

      {/* 3. 본문 컨텐츠 영역 (Main Content) */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-8 md:py-12">
        
        {activeTab === 'program' && (
          <div className="animate-in fade-in duration-500">
            {/* 상단 타이틀 및 경로 */}
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">프로그램 정보</h1>
          <div className="hidden md:flex flex-row items-center text-sm text-white/40 font-medium">
            <span>JBC Plus</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-white/80">프로그램 정보</span>
          </div>
        </div>

        {/* 프로그램 썸네일 & 메타정보 */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-16">
          {/* 왼쪽: 메인 포스터/이미지 박스 */}
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[4/3] bg-[#050508] rounded-[20px] relative flex shadow-[0_0_30px_rgba(255,62,129,0.15)] overflow-hidden border border-[#ff3e81]/20">
              <img src="https://img.jjerrii.uk/idol/IMG_1318.jpg" alt="비하인드 웨딩 메인 포스터" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* 오른쪽: 프로그램 정보 텍스트 */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#ff3e81] text-white text-xs font-bold px-2 py-1 rounded tracking-widest">LIVE</span>
              <span className="text-white/90 text-sm font-bold">가상 부부 예능</span>
              <span className="text-white/30 text-sm">|</span>
              <span className="text-white/60 text-sm font-medium">로맨스 코미디 / 혐관 로맨스</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white transition-colors mb-6 font-bold flex items-center">
              비하인드 웨딩
            </h2>

            <div className="w-full border-t border-white/10">
              <div className="flex border-b border-white/5 py-4">
                <div className="w-28 shrink-0 font-bold text-white/50 text-[15px]">채널 / 편성</div>
                <div className="text-white/90 text-[15px]">JBC Plus / 매주 금요일 밤 11:00 방송</div>
              </div>
              <div className="flex border-b border-white/5 py-4">
                <div className="w-28 shrink-0 font-bold text-white/50 text-[15px]">핵심 컨셉</div>
                <div className="text-white/90 text-[15px]">최정상 아이돌 2명의 가상 부부 예능<br/><span className="text-[#ff3e81] text-xs font-bold">(실상은 4년 사귀고 유치하게 깨진 전 연인!)</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* 기획의도 섹션 */}
        <section className="mb-16">
          <div className="mt-12 mb-6">
            <h3 className="text-2xl font-bold inline-block border-b-2 border-[#ff3e81] pb-2 text-white">방송 기획의도</h3>
          </div>
          <div className="bg-white/5 p-8 md:p-10 rounded-[16px] text-lg text-white/80 leading-relaxed border border-white/10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff3e81]/10 blur-3xl rounded-full"></div>
            {/* 시청자에게 보여지는 공식 기획 의도 */}
            <div className="mb-10 relative z-10">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center"><PlayCircle className="w-5 h-5 mr-2 text-[#ff3e81]" /> [ 공식 기획 의도 ]</h4>
              <p>대한민국 최고의 스타들이 가상 부부가 되어 리얼한 결혼 생활을 보여주는 대국민 심쿵 유발 버라이어티 <span className="text-[#ff3e81] font-bold">비하인드 웨딩</span>!</p>
              <br/>
              <p>화려한 스포트라이트를 받는 스타들. 하지만 무대 아래, 카메라가 꺼진 진짜 그들의 모습은 어떨까?</p>
              <p>서로 다른 환경, 성격, 라이프스타일을 가진 두 스타가 만나 하나의 가정을 꾸리고,</p>
              <p>사소한 다툼부터 달콤한 화해까지, 예기치 못한 돌발 상황 속에서 피어나는 아슬아슬하고 달콤한 로맨스.</p>
              <br/>
              <p>팬들이 꿈꾸던 판타지를 현실로 만들어줄 단 하나의 가상 결혼 프로그램.</p>
              <p>지금, 당신의 심장을 뛰게 할 가장 아찔한 웨딩 마치가 울려 퍼집니다.</p>
            </div>

            {/* 실제 세계관 설정 (시청자 모름) */}
            <div className="border-t border-white/10 pt-10 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <h4 className="text-xl font-bold text-white/50 flex items-center relative inline-block"><span className="absolute -left-6 top-1 text-red-500 font-bold text-2xl animate-pulse">!</span> [ 시작 설정: 1급 기밀 ]</h4>
                <button 
                  onClick={() => setShowSecret(!showSecret)}
                  className="flex items-center bg-black/50 border border-red-500/30 hover:border-red-500/70 hover:bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold transition-all w-fit"
                >
                  {showSecret ? <UnlockKeyhole className="w-4 h-4 mr-2" /> : <LockKeyhole className="w-4 h-4 mr-2" />}
                  {showSecret ? "기밀 문서 닫기" : "기밀 문서 열람하기 (클릭)"}
                </button>
              </div>
              
              {showSecret && (
                <div className="bg-black/30 p-6 rounded-lg border border-red-500/20 text-white/60 text-[15px] animate-in fade-in slide-in-from-top-4 duration-500">
                  <p className="text-red-400 font-bold mb-2">※ 극비 사항 (프로그램 스태프 외 열람 금지)</p>
                  <p>매칭된 메인 커플은 사실 <strong>4년을 사귀고 징글징글하게 깨진 진짜 전 연인!</strong></p>
                  <br/>
                  <p>카메라가 돌아갈 때는 시청률을 위해 환상의 커플을 연기하지만, 카메라가 꺼지거나 블랙룸 인터뷰에 들어가는 순간 곧바로 날선 공방전과 유치한 복수전이 시작됩니다!</p>
                  <p>시청자들은 두 사람의 아슬아슬한 케미에 열광하지만, 그 화면 뒤에는 미련, 애증, 그리고 100% 진짜 텐션이 함께 버무려져 있습니다.</p>
                </div>
              )}
            </div>
            
            {/* 당신의 포지션 */}
            <div className="border border-white/10 bg-black/30 rounded-xl p-6 mt-8 relative z-10">
              <h4 className="flex items-center text-white font-bold mb-4"><Search className="w-5 h-5 mr-2 text-[#ff3e81]" /> 시뮬레이션: 당신의 포지션 선택</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#ff3e81]/50 cursor-pointer transition-colors group">
                  <div className="font-bold text-white mb-2 pb-2 border-b border-white/10 group-hover:text-[#ff3e81] transition-colors">시작설정 1. [여자 아이돌]</div>
                  <div className="text-sm text-white/60">당신은 인기 여자 아이돌. 피하고 싶던 가장 최악의 상대, 4년간 만난 전남친과 같은 프로그램에 부부로 동반 출연하게 되었습니다. 들키지 않고 무사히 방송을 마칠 수 있을까요?</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#ff3e81]/50 cursor-pointer transition-colors group">
                  <div className="font-bold text-white mb-2 pb-2 border-b border-white/10 group-hover:text-[#ff3e81] transition-colors">시작설정 2. [전담 작가]</div>
                  <div className="text-sm text-white/60">당신은 프로그램 담당 메인 작가. 그리고 무려 남자 출연자의 전 연인이기도 하죠. 카메라 앞에서 다른 여자와 다정하게 꽁냥대는 전남친을 보며 대본으로 어떻게 합법적 괴롭힘을 선사할지 행복한 구상 중입니다.</div>
                </div>
              </div>
            </div>

            {/* 명령어 안내 */}
            <div className="border border-[#ff3e81]/20 bg-black/40 rounded-xl p-6 mt-8 relative z-10 shadow-[0_0_20px_rgba(255,62,129,0.1)] flex flex-col">
              <h4 className="flex items-center text-white font-bold mb-4"><Terminal className="w-5 h-5 mr-2 text-[#ff3e81]" /> 챗봇 명령어 가이드</h4>
              <p className="text-sm text-white/50 mb-6">채팅 중 아래의 명령어를 입력하여 특별한 이벤트나 기능을 사용할 수 있습니다.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col hover:border-[#ff3e81]/30 transition-colors">
                  <div className="font-mono text-[#ff3e81] font-bold mb-2 text-lg">!요약</div>
                  <div className="text-sm text-white/70">15~20 턴의 대화 내용을 요약해줍니다.</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col hover:border-[#ff3e81]/30 transition-colors">
                  <div className="font-mono text-[#ff3e81] font-bold mb-2 text-lg">!점검</div>
                  <div className="text-sm text-white/70">현재 캐릭터의 문체와 말투를 점검합니다.</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col hover:border-[#ff3e81]/30 transition-colors">
                  <div className="font-mono text-[#ff3e81] font-bold mb-2 text-lg">!진행</div>
                  <div className="text-sm text-white/70">제작진의 강제 퀘스트 <span className="text-white font-bold">[미션봉투]</span>를 전달합니다.</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col hover:border-[#ff3e81]/30 transition-colors">
                  <div className="font-mono text-[#ff3e81] font-bold mb-2 text-lg">!댓글</div>
                  <div className="text-sm text-white/70">시청자들의 아찔한 실시간 <span className="text-white font-bold">라이브 반응</span>을 확인합니다.</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col hover:border-[#ff3e81]/30 transition-colors">
                  <div className="font-mono text-[#ff3e81] font-bold mb-2 text-lg">!드라이브</div>
                  <div className="text-sm text-white/70">과거 4년간의 <span className="text-white font-bold">[비밀연애 드라이브]</span> 썰을 풉니다.</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex flex-col hover:border-[#ff3e81]/30 transition-colors">
                  <div className="font-mono text-[#ff3e81] font-bold mb-2 text-lg">!버블</div>
                  <div className="text-sm text-white/70">팬들에게 보내는 달콤살벌한 <span className="text-white font-bold">버블 메시지</span>를 확인합니다.</div>
                </div>
              </div>
            </div>

          </div>
        </section>
        </div>
        )}

        {activeTab === 'character' && (
        <div className="animate-in fade-in duration-500">
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">캐릭터(출연진) 소개</h1>
            <div className="hidden md:flex flex-row items-center text-sm text-white/40 font-medium">
              <span>JBC Plus</span>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="text-white/80">캐릭터 소개</span>
            </div>
          </div>

          {/* 화제의 출연진: 한지오 */}
          <section className="mb-16">
            <div className="mb-6">
               <h3 className="text-2xl font-bold inline-block border-b-2 border-[#ff3e81] pb-2 text-white">🔥 화제의 출연진</h3>
            </div>
          
          <div className="bg-[#0a0a0f] border border-white/10 rounded-[20px] overflow-hidden flex flex-col lg:flex-row shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            
            {/* 좌측 캐릭터 포스터 영역 */}
            <div className="w-full lg:w-[40%] bg-gradient-to-b from-[#1a1217] to-[#050508] relative p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded text-[10px] font-bold border border-white/10 text-white/50 tracking-wider">CAST #1</div>
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[rgba(255,62,129,0.3)] shadow-[0_0_40px_rgba(255,62,129,0.2)] mb-6 bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[url('https://img.jjerrii.uk/idol/1776690524885_01_processed.webp')] bg-cover bg-center object-cover"></div>
              </div>
              <h4 className="text-4xl font-black tracking-tight text-white mb-1">한지오 <span className="text-xl font-medium text-white/40 ml-1">Han Ji-o</span></h4>
              <p className="text-[#ff3e81] font-bold text-sm tracking-widest mb-4 mt-2">최정상 5인조 그룹 [ECLIPSE] 메인 래퍼</p>
              
              <div className="flex gap-2 flex-wrap justify-center mt-2">
                <span className="px-3 py-1 text-xs font-bold bg-[#ff3e81]/10 text-[#ff3e81] rounded-full border border-[#ff3e81]/20">#ENTP-A</span>
                <span className="px-3 py-1 text-xs font-bold bg-white/5 text-white/80 rounded-full border border-white/10">#화려한 핑크머리</span>
                <span className="px-3 py-1 text-xs font-bold bg-white/5 text-white/80 rounded-full border border-white/10">#초딩본성</span>
              </div>
            </div>

            {/* 우측 프로필 상세 영역 */}
            <div className="w-full lg:w-[60%] p-8 lg:p-10 flex flex-col gap-6">
              
              {/* 스펙 */}
              <div className="flex gap-x-8 gap-y-4 flex-wrap border-b border-white/10 pb-6">
                <div>
                  <div className="text-white/40 text-xs font-bold mb-1 tracking-wider">AGE / D.O.B</div>
                  <div className="text-white font-medium">24세 / 10.31</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold mb-1 tracking-wider">PHYSICAL</div>
                  <div className="text-white font-medium">184cm / 72kg</div>
                </div>
                <div className="w-full sm:w-auto">
                  <div className="text-white/40 text-xs font-bold mb-1 tracking-wider">VISUAL MARK</div>
                  <div className="text-white font-medium text-sm leading-snug">
                    트레이닝복이 잘 어울리는 피지컬, 그레이 블루 눈동자<br/>
                    왼쪽 귀 피어싱 3개 <span className="text-white/40">(하나는 과거 여친과 맞춘 커플템)</span>
                  </div>
                </div>
              </div>

              {/* TMI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h5 className="text-[#ff3e81] font-bold text-sm mb-3 tracking-widest">🖤 FAVORITES</h5>
                  <ul className="text-[13px] text-white/70 space-y-2">
                    <li className="flex items-start"><span className="text-[#ff3e81] mr-2">✓</span> 블랙(Black) 컬러 성애자</li>
                    <li className="flex items-start"><span className="text-[#ff3e81] mr-2">✓</span> 매운 짬뽕 (땀 흘리며 먹기)</li>
                    <li className="flex items-start text-white/90 font-medium"><span className="text-[#ff3e81] mr-2">✓</span> 당신({"{user}"}) 당황시키기</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h5 className="text-gray-400 font-bold text-sm mb-3 tracking-widest">✕ DISLIKES</h5>
                  <ul className="text-[13px] text-white/70 space-y-2">
                    <li className="flex items-start"><span className="text-gray-500 mr-2">✕</span> 형광 노란색</li>
                    <li className="flex items-start"><span className="text-gray-500 mr-2">✕</span> 단 음식 (초콜릿 등)</li>
                  </ul>
                </div>
              </div>

              {/* 과거 서사 */}
              <div>
                 <h5 className="flex items-center text-white font-bold text-lg mb-4">
                   <PlayCircle className="w-5 h-5 mr-2 text-[#ff3e81] fill-[#ff3e81]/20" /> 
                   [ 4년의 징글징글한 기록 ]
                 </h5>
                 <div className="space-y-4 text-[13px] text-white/80 border-l-2 border-[#ff3e81]/30 pl-4 py-1">
                    <div className="flex flex-col sm:flex-row gap-2 relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-[#ff3e81] rounded-full"></div>
                      <div className="min-w-[70px] font-bold text-[#ff3e81]">18~19세</div>
                      <div className="flex-1 text-white/60">연습생 동기. 같이 데뷔하자는 약속과 함께 비밀 연애 시작. 비상구 계단에서 삼각김밥 하나로도 행복했던 시절.</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-white/30 rounded-full"></div>
                      <div className="min-w-[70px] font-bold text-white/80">20~22세</div>
                      <div className="flex-1 text-white/60">데뷔, 스케줄이 꼬이며 수십 번의 '헤어지자'와 '다시 만나자'를 반복. 서로의 자존심을 긁는 법을 너무 잘 알게 됨.</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-white/30 rounded-full"></div>
                      <div className="min-w-[70px] font-bold text-white/80">2년 전</div>
                      <div className="flex-1 text-white/60">"우리 진짜 질린다. 이제 그만하자." 라는 말과 함께 합의 하에 완전한 결별. 이후 철저히 남남으로 지냄.</div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* 화제의 출연진: 정아라 (시작설정 2) */}
        <section className="mb-16">
          <div className="mb-6">
             <h3 className="text-2xl font-bold inline-block border-b-2 border-[#4a84d4] pb-2 text-white">✨ 특별 출연진</h3>
             <p className="mt-2 text-sm text-white/50">시작설정 2. [전담 작가] 선택 시 등장하는 인물입니다.</p>
          </div>
          
          <div className="bg-[#0a0a0f] border border-[#4a84d4]/30 rounded-[20px] overflow-hidden flex flex-col lg:flex-row shadow-[0_10px_30px_rgba(74,132,212,0.15)] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a84d4]/5 to-transparent pointer-events-none"></div>
            
            {/* 좌측 캐릭터 포스터 영역 */}
            <div className="w-full lg:w-[40%] bg-gradient-to-b from-[#0a1526] to-[#050508] relative p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5 z-10">
              <div className="absolute top-4 left-4 bg-[#4a84d4]/20 px-3 py-1 rounded text-[10px] font-bold border border-[#4a84d4]/30 text-[#4a84d4] tracking-wider">CAST #2</div>
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#4a84d4]/50 shadow-[0_0_40px_rgba(74,132,212,0.3)] mb-6 bg-gradient-to-tr from-[#0a1526] to-gray-900 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[url('https://img.jjerrii.uk/idol/%7B1girl%7D%2C%20solo%2C%20%20artist_2015x127%2C%20teeniika%2C%20yum_606%2C%20bloodybeni%2C%20year%202024%2C%20%C2%A0_%7B%7B%7B%20s-999413328_processed.webp')] bg-cover bg-center object-cover"></div>
                 <div className="absolute inset-0 bg-[#4a84d4] mix-blend-overlay opacity-20"></div>
              </div>
              <h4 className="text-4xl font-black tracking-tight text-white mb-1">정아라 <span className="text-xl font-medium text-white/40 ml-1">ARA</span></h4>
              <p className="text-[#4a84d4] font-bold text-sm tracking-widest mb-4 mt-2 px-6 text-center">글로벌 탑티어 걸그룹 [LILITH]<br/>센터 및 메인 보컬</p>
              
              <div className="flex gap-2 flex-wrap justify-center mt-2">
                <span className="px-3 py-1 text-xs font-bold bg-[#4a84d4]/10 text-[#4a84d4] rounded-full border border-[#4a84d4]/20">#ISTP_ISTJ</span>
                <span className="px-3 py-1 text-xs font-bold bg-white/5 text-white/80 rounded-full border border-white/10">#블루트윈테일</span>
                <span className="px-3 py-1 text-xs font-bold bg-white/5 text-white/80 rounded-full border border-white/10">#자본주의_아이돌</span>
              </div>
            </div>

            {/* 우측 프로필 상세 영역 */}
            <div className="w-full lg:w-[60%] p-8 lg:p-10 flex flex-col gap-6 z-10">
              
              {/* 스펙 */}
              <div className="flex gap-x-8 gap-y-4 flex-wrap border-b border-white/10 pb-6">
                <div>
                  <div className="text-white/40 text-xs font-bold mb-1 tracking-wider">AGE / D.O.B</div>
                  <div className="text-white font-medium">21세 / 10.31</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold mb-1 tracking-wider">PHYSICAL</div>
                  <div className="text-white font-medium">164cm / 45kg</div>
                </div>
                <div className="w-full sm:w-auto">
                  <div className="text-white/40 text-xs font-bold mb-1 tracking-wider">VISUAL MARK</div>
                  <div className="text-white font-medium text-sm leading-snug">
                    눈에 띄는 블루 트윈테일, 매혹적인 황금빛 눈동자
                  </div>
                </div>
              </div>

              {/* TMI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/10">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h5 className="text-[#4a84d4] font-bold text-sm mb-3 tracking-widest">💰 WORK ETHIC</h5>
                  <ul className="text-[13px] text-white/70 space-y-2">
                    <li className="flex items-start"><span className="text-[#4a84d4] mr-2">✓</span> 철저한 비즈니스 & 효율 중심주의</li>
                    <li className="flex items-start"><span className="text-[#4a84d4] mr-2">✓</span> 아이돌 = "고수익 전문직"</li>
                    <li className="flex items-start"><span className="text-[#4a84d4] mr-2">✓</span> 데빌 컨셉은 철저한 자본주의 서비스</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h5 className="text-gray-400 font-bold text-sm mb-3 tracking-widest">🛡️ MENTALITY</h5>
                  <ul className="text-[13px] text-white/70 space-y-2">
                    <li className="flex items-start"><span className="text-gray-500 mr-2">■</span> 악플 및 루머 타격감 제로 (멘탈 갑)</li>
                    <li className="flex items-start"><span className="text-gray-500 mr-2">■</span> 퇴근 시 무대 세팅(뿔 등) 즉시 오프</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
        </div>
        )}

        {activeTab === 'community' && (
          <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">커뮤니티</h1>
              <div className="hidden md:flex flex-row items-center text-sm text-white/40 font-medium">
                <span>JBC Plus</span>
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-white/80">커뮤니티</span>
              </div>
            </div>

            <section className="mb-16">
              <div className="mb-6 flex justify-between items-center">
                 <h3 className="text-2xl font-bold text-white"><span className="text-[#ff3e81]">시청자</span> 익명 게시판</h3>
                 <button onClick={() => setShowWriteModal(true)} className="bg-[#ff3e81] hover:bg-[#ff3e81]/80 text-white px-4 py-2 rounded text-sm font-bold transition-colors">글쓰기</button>
              </div>

              {/* 게시판 리스트 */}
              <div className="bg-[#0a0a0f] border border-white/10 rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <table className="w-full text-sm text-left text-white/70">
                  <thead className="bg-white/5 border-b border-white/10 text-white/50 text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-medium text-center w-16 hidden sm:table-cell">번호</th>
                      <th className="px-6 py-4 font-medium">제목</th>
                      <th className="px-6 py-4 font-medium text-center w-24">작성자</th>
                      <th className="px-6 py-4 font-medium text-center w-24 hidden sm:table-cell">작성일</th>
                      <th className="px-6 py-4 font-medium text-center w-16 hidden sm:table-cell">조회수</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/5 transition-colors cursor-pointer bg-white/[0.02]">
                      <td className="px-6 py-4 text-center hidden sm:table-cell"><span className="bg-[#ff3e81] text-white text-[11px] px-2 py-1 rounded inline-block font-medium">공지</span></td>
                      <td className="px-6 py-4 font-bold text-white">비하인드 웨딩 시청자 게시판 이용 수칙 <span className="text-[#ff3e81] text-xs ml-1">[2]</span></td>
                      <td className="px-6 py-4 text-center text-white/40">운영자</td>
                      <td className="px-6 py-4 text-center hidden sm:table-cell">04-20</td>
                      <td className="px-6 py-4 text-center hidden sm:table-cell">1.2만</td>
                    </tr>
                    {posts.map(post => (
                      <tr key={post.id} className="hover:bg-white/5 transition-colors cursor-pointer animate-in fade-in duration-300">
                        <td className="px-6 py-4 text-center hidden sm:table-cell">{post.id}</td>
                        <td className="px-6 py-4 text-white hover:text-[#ff3e81] transition-colors">
                          {post.title} {post.comments > 0 && <span className="text-[#ff3e81] text-xs font-bold ml-1">[{post.comments}]</span>}
                        </td>
                        <td className="px-6 py-4 text-center">{post.author}</td>
                        <td className="px-6 py-4 text-center hidden sm:table-cell">{post.date}</td>
                        <td className="px-6 py-4 text-center hidden sm:table-cell">{post.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/50 hover:bg-white/5 transition-colors">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-[#ff3e81] text-white font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white hover:bg-white/5 transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white hover:bg-white/5 transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white hover:bg-white/5 transition-colors">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white hover:bg-white/5 transition-colors">5</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-white/50 hover:bg-white/5 transition-colors">&gt;</button>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'clip' && (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-24 h-24 mb-6 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,62,129,0.05)]">
                <PlayCircle className="w-10 h-10 text-white/30" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">아직 방송 전입니다</h3>
              <p className="text-white/50 text-base leading-relaxed">첫 방송 이후 명장면 클립이 업데이트될 예정입니다.<br/>본방 사수를 놓치지 마세요!</p>
            </div>
          </div>
        )}

        {/* 커뮤니티 글쓰기 모달 */}
        {showWriteModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#12121a] border border-[#ff3e81]/30 rounded-2xl w-full max-w-lg shadow-[0_0_50px_rgba(255,62,129,0.15)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h3 className="text-xl font-bold text-white">새 익명 글 쓰기</h3>
                <button onClick={() => setShowWriteModal(false)} className="text-white/50 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">대화명</label>
                  <input type="text" value="익명" disabled className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white/50 cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">내용</label>
                  <textarea 
                    value={postInput}
                    onChange={(e) => setPostInput(e.target.value)}
                    placeholder="방송에 대한 자유로운 의견을 남겨주세요." 
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff3e81]/50 focus:ring-1 focus:ring-[#ff3e81]/50 min-h-[120px] resize-none transition-all"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-white/5 bg-black/20 flex justify-end gap-3">
                <button onClick={() => setShowWriteModal(false)} className="px-5 py-2.5 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors text-sm font-bold">취소</button>
                <button onClick={handlePostSubmit} className="bg-[#ff3e81] hover:bg-[#ff3e81]/80 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-[0_0_15px_rgba(255,62,129,0.3)]">등록하기</button>
              </div>
            </div>
          </div>
        )}

      </main>
      
      <footer className="w-full bg-[#111] border-t border-white/5 mt-auto py-8">
        <div className="max-w-[1200px] mx-auto px-4 text-sm text-white/40">
          <p>© 2026 JBC Plus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
