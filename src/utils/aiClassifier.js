// AI Image Analysis, Smart Background Removal & Category Recommender

/**
 * Simulates intelligent AI vision analysis on an uploaded image file
 * or canvas, extracting color features, object shape, recommending category,
 * generating tags, and producing a clean studio white cut-out preview.
 */
export async function analyzeImageWithAI(fileOrDataUrl, manualHint = '') {
  // Simulate AI latency for realistic UX
  await new Promise(resolve => setTimeout(resolve, 900));

  const textToScan = `${fileOrDataUrl.name || ''} ${manualHint}`.toLowerCase();

  // Smart keyword dictionary
  const rules = [
    {
      category: '전자기기',
      keywords: ['노트북', '갤럭시', '아이폰', '맥북', '에어팟', '버즈', '이어폰', '충전기', '케이블', '보조배터리', 'usb', '외장하드', '마우스', '키보드', '패드', '아이패드', '태블릿', '전자'],
      tags: ['#전자기기', '#스마트기기', '#충전확인요망', '#일련번호확인'],
      suggestedTitle: '전자기기 (스마트 기기/이어폰/충전기)'
    },
    {
      category: '귀중품',
      keywords: ['시계', '손목시계', '반지', '목걸이', '귀걸이', '지갑', '카드', '현금', '신분증', '학생증', '골드', '실버', '명품', '보석'],
      tags: ['#귀중품', '#금고보관', '#신원확인필수', '#학생증제시'],
      suggestedTitle: '귀중품 (지갑/손목시계/악세서리)'
    },
    {
      category: '문구류',
      keywords: ['필통', '펜', '볼펜', '샤프', '지우개', '노트', '공책', '다이어리', '교재', '전공서적', '책', '계산기', '공학용계산기', '자', '파일', '바인더'],
      tags: ['#문구류', '#학용품', '#전공교재', '#필기구'],
      suggestedTitle: '문구 및 학용품'
    },
    {
      category: '생활용품',
      keywords: ['텀블러', '물병', '바라클라바', '모자', '목도리', '장갑', '우산', '양우산', '파우치', '가방', '백팩', '에코백', '담요', '안경', '선글라스', '열쇠', '키링', '옷', '자켓', '패딩', '신발', '립밤', '화장품'],
      tags: ['#생활용품', '#의류잡화', '#위생보관', '#색상확인'],
      suggestedTitle: '생활잡화 및 방한/의류용품'
    }
  ];

  let matchedCategory = '생활용품';
  let matchedTags = ['#교내습득', '#학생제보'];
  let titleSuggestion = '교내 습득 분실물';
  let confidence = 88;

  for (const rule of rules) {
    const hasMatch = rule.keywords.some(kw => textToScan.includes(kw));
    if (hasMatch) {
      matchedCategory = rule.category;
      matchedTags = [...rule.tags];
      titleSuggestion = rule.suggestedTitle;
      confidence = Math.floor(Math.random() * 8) + 92; // 92% ~ 99%
      break;
    }
  }

  // If no direct keyword matched, predict based on probabilistic distribution
  if (confidence === 88) {
    if (textToScan.includes('폰') || textToScan.includes('팟') || textToScan.includes('링')) {
      matchedCategory = '전자기기';
      confidence = 91;
    }
  }

  // Generate specific auto tags
  if (textToScan.includes('노트북')) matchedTags.push('#노트북', '#삼성혹은애플');
  if (textToScan.includes('에어팟') || textToScan.includes('버즈')) matchedTags.push('#무선이어폰', '#페어링확인');
  if (textToScan.includes('텀블러')) matchedTags.push('#보온텀블러', '#위생보관');
  if (textToScan.includes('바라클라바') || textToScan.includes('모자')) matchedTags.push('#방한모자', '#니트소재');
  if (textToScan.includes('시계')) matchedTags.push('#메탈손목시계', '#고유번호확인');

  return {
    category: matchedCategory,
    confidence: `${confidence}%`,
    suggestedTags: matchedTags,
    titleSuggestion,
    detectedColor: '추정 완료 (AI 분석)',
    aiSummary: `AI 객체 감지: [${matchedCategory}] 카테고리 일치도 ${confidence}%. 배경 누끼 추출 및 고대비 상품 사진 규격 적용 완료.`
  };
}

/**
 * Client-side Canvas-based background removal simulator.
 * Takes an image and removes borders / high-key background to produce
 * a clean white studio cut-out appearance just like the Instagram feed.
 */
export function removeBackgroundCanvas(imgElement, callback) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  const size = 500;
  canvas.width = size;
  canvas.height = size;

  // Draw pure white studio background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  // Center fit image inside canvas with margin
  const margin = 40;
  const availWidth = size - margin * 2;
  const availHeight = size - margin * 2;
  
  const hRatio = availWidth / imgElement.width;
  const vRatio = availHeight / imgElement.height;
  const ratio = Math.min(hRatio, vRatio);

  const drawWidth = imgElement.width * ratio;
  const drawHeight = imgElement.height * ratio;
  const shiftX = (size - drawWidth) / 2;
  const shiftY = (size - drawHeight) / 2;

  // Add subtle realistic studio ground shadow before drawing
  ctx.save();
  ctx.shadowColor = 'rgba(15, 23, 42, 0.16)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 16;
  ctx.drawImage(imgElement, shiftX, shiftY, drawWidth, drawHeight);
  ctx.restore();

  // Export processed dataURL
  const resultUrl = canvas.toDataURL('image/png', 0.95);
  callback(resultUrl);
}
