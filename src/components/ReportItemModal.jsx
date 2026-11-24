import React, { useState, useRef } from 'react';
import { 
  X, Camera, Upload, Sparkles, Check, Wand2, MapPin, 
  Tag, Info, AlertCircle, RefreshCw, CheckCircle2 
} from 'lucide-react';
import { SOONGSIL_BUILDINGS } from '../data/buildings';
import { analyzeImageWithAI, removeBackgroundCanvas } from '../utils/aiClassifier';
import { getGenericItemSvg } from '../utils/productImages';

export default function ReportItemModal({
  isOpen,
  onClose,
  onSubmitReport,
  nextIdNumber = 163
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('전자기기');
  const [building, setBuilding] = useState('학생회관');
  const [detailLocation, setDetailLocation] = useState('');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [isProcessingAI, setIsProcessingAI] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [bgRemoved, setBgRemoved] = useState(false);
  const [finderName, setFinderName] = useState('숭실대 재학생 (익명)');

  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  // Handle Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const dataUrl = uploadEvent.target.result;
      setPreviewImage(dataUrl);
      setBgRemoved(false);

      // Trigger automatic AI analysis
      triggerAIAnalysis(file, dataUrl, title);
    };
    reader.readAsDataURL(file);
  };

  // Preset sample image loader for quick demo testing if user doesn't have a photo ready
  const handleLoadSample = (sampleType) => {
    let sampleTitle = '';
    let sampleCategory = '전자기기';

    if (sampleType === 'wallet') {
      sampleTitle = '소가죽 브라운 남성 반지갑 (현금 및 학생증 포함)';
      sampleCategory = '귀중품';
    } else if (sampleType === 'umbrella') {
      sampleTitle = '네이비 3단 자동 우산';
      sampleCategory = '생활용품';
    } else if (sampleType === 'ipad') {
      sampleTitle = '스페이스 그레이 아이패드 에어 및 애플펜슬';
      sampleCategory = '전자기기';
    }

    setTitle(sampleTitle);
    setCategory(sampleCategory);

    // Generate clean SVG visual preview
    const svgCode = getGenericItemSvg(sampleCategory, sampleTitle, `2026-${nextIdNumber}`);
    const svgBlob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
    const blobUrl = URL.createObjectURL(svgBlob);
    setPreviewImage(blobUrl);
    setBgRemoved(true);

    triggerAIAnalysis({ name: sampleTitle }, blobUrl, sampleTitle);
  };

  // AI Classification & Background Removal
  const triggerAIAnalysis = async (fileObj, dataUrl, currentTitle) => {
    setIsProcessingAI(true);
    try {
      const result = await analyzeImageWithAI(fileObj, currentTitle);
      setAiResult(result);

      if (result.category) {
        setCategory(result.category);
      }
      if (result.suggestedTags && result.suggestedTags.length > 0) {
        setTagsInput(result.suggestedTags.join(' '));
      }
      if (!title && result.titleSuggestion) {
        setTitle(result.titleSuggestion);
      }

      // Simulate Background removal
      const img = new Image();
      img.onload = () => {
        removeBackgroundCanvas(img, (cutoutUrl) => {
          setPreviewImage(cutoutUrl);
          setBgRemoved(true);
          setIsProcessingAI(false);
        });
      };
      img.src = dataUrl;
    } catch (err) {
      console.error(err);
      setIsProcessingAI(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('물품명을 입력해주세요.');
      return;
    }

    const newId = `2026-${nextIdNumber}`;
    const parsedTags = tagsInput
      .split(/[\s,]+/)
      .map(t => t.replace(/^#/, '').trim())
      .filter(Boolean);

    const newItem = {
      id: newId,
      title: title.trim(),
      category,
      year: '2026',
      date: new Date().toISOString().slice(0, 10),
      status: '보관중',
      location: building,
      locationDetail: detailLocation || `${building} 내 습득`,
      foundTime: '방금 전 접수',
      storageLocation: '학생회관 406호 (학생서비스팀 접수대)',
      tags: parsedTags.length > 0 ? parsedTags : ['교내습득', category],
      description: description.trim() || '학생이 직접 교내에서 습득하여 제보 등록한 분실물입니다. 학생회관 406호 분실물센터에 방문하여 소유자 확인 후 수령하실 수 있습니다.',
      imageUrl: previewImage,
      svg: !previewImage ? getGenericItemSvg(category, title, newId) : null,
      views: 1,
      finder: finderName
    };

    onSubmitReport(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-gray-150 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1B4F9C] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#00A1E9] flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="font-extrabold text-base leading-none">습득물 제보 및 등록</h2>
              <p className="text-[11px] text-cyan-200 mt-0.5">AI 누끼 배경 제거 및 자동 카테고리 분류</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 space-y-4 text-xs">
          {/* Photo Upload & AI Studio Preview Section */}
          <div>
            <label className="block text-gray-700 font-bold mb-1.5 flex items-center justify-between">
              <span>습득물 사진 등록 (필수)</span>
              <span className="text-[10px] text-[#00A1E9] font-medium flex items-center">
                <Sparkles className="w-3 h-3 mr-0.5" />
                AI 자동 누끼(흰색 배경) 적용
              </span>
            </label>

            <div className="relative">
              {previewImage ? (
                <div className="relative rounded-2xl bg-white border-2 border-dashed border-[#00A1E9] aspect-square max-h-56 mx-auto flex items-center justify-center p-4 overflow-hidden group shadow-inner">
                  <img
                    src={previewImage}
                    alt="습득물 미리보기"
                    className="max-h-full max-w-full object-contain cutout-object"
                  />
                  {/* Badge */}
                  {bgRemoved && (
                    <div className="absolute top-2 left-2 bg-[#00A1E9] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>AI 배경 제거 완료 (인스타 규격)</span>
                    </div>
                  )}

                  {/* Change Photo Overlay Button */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-white text-gray-900 font-bold px-3 py-1.5 rounded-xl text-xs shadow-md hover:bg-gray-100"
                    >
                      사진 변경
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#00A1E9] bg-gray-50 hover:bg-sky-50/50 p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-[#1B4F9C] flex items-center justify-center mb-2">
                    <Camera className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-gray-800 text-xs mb-0.5">물품 사진을 촬영하거나 갤러리에서 선택</p>
                  <p className="text-[11px] text-gray-400">AI가 배경을 깔끔한 흰색 스튜디오 톤으로 누끼 처리합니다</p>
                </div>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Quick Demo Sample Selector if user wants to test quickly */}
            <div className="mt-2 flex items-center space-x-1.5 overflow-x-auto text-[11px]">
              <span className="text-gray-400 shrink-0">빠른 샘플 테스트:</span>
              <button
                type="button"
                onClick={() => handleLoadSample('wallet')}
                className="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded hover:bg-amber-100 shrink-0"
              >
                + 가죽 지갑
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('ipad')}
                className="bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded hover:bg-blue-100 shrink-0"
              >
                + 아이패드
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('umbrella')}
                className="bg-red-50 text-red-800 border border-red-200 px-2 py-0.5 rounded hover:bg-red-100 shrink-0"
              >
                + 자동 우산
              </button>
            </div>
          </div>

          {/* AI Detection Result Box */}
          {isProcessingAI && (
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-center space-x-2.5 text-[#00A1E9]">
              <RefreshCw className="w-4 h-4 animate-spin shrink-0" />
              <div>
                <p className="font-bold text-xs">AI 이미지 분석 및 배경 제거 진행 중...</p>
                <p className="text-[10px] text-sky-700">객체 특징 식별 및 카테고리 추천 중입니다.</p>
              </div>
            </div>
          )}

          {aiResult && !isProcessingAI && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-emerald-900 animate-fadeIn">
              <div className="flex items-center space-x-1.5 font-bold mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>AI 스마트 분석 완료 (정확도 {aiResult.confidence})</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-snug">
                추천 카테고리: <strong>[{aiResult.category}]</strong> 및 추천 태그가 폼에 자동 반영되었습니다.
              </p>
            </div>
          )}

          {/* Item Title Input */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">
              물품명 및 주요 특징 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: 삼성 갤럭시 실버 노트북, 스틸 블루 바라클라바"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#00A1E9] focus:ring-1 focus:ring-[#00A1E9] text-xs font-semibold text-gray-900"
              required
            />
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">
              카테고리 선택 <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['전자기기', '생활용품', '문구류', '귀중품', '기타'].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`py-2 px-2 rounded-xl font-bold text-xs border transition-all text-center ${
                    category === cat
                      ? 'bg-[#1B4F9C] text-white border-[#1B4F9C] shadow-xs'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Found Location (Soongsil Univ Buildings) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-700 font-bold mb-1">
                습득 장소 (교내 주요 건물) <span className="text-red-500">*</span>
              </label>
              <select
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#00A1E9] text-xs font-medium bg-white text-gray-900"
              >
                {SOONGSIL_BUILDINGS.filter(b => b.id !== 'all').map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-1">
                세부 위치 (층수 / 호수)
              </label>
              <input
                type="text"
                value={detailLocation}
                onChange={(e) => setDetailLocation(e.target.value)}
                placeholder="예: 3층 열람실 12번 책상, 정수기 앞"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#00A1E9] text-xs text-gray-900"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-bold mb-1 flex items-center justify-between">
              <span>검색 태그 (스페이스로 구분)</span>
              <span className="text-[10px] text-gray-400">예: #삼성 #노트북 #은색</span>
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="#노트북 #실버 #갤럭시북 #충전기"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#00A1E9] text-xs text-gray-900"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-bold mb-1">
              상세 설명 및 특이사항
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="외관 흠집, 스티커 부착 여부, 케이스 색상 등 본인 확인에 도움되는 특징을 적어주세요."
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[#00A1E9] text-xs text-gray-900 resize-none"
            />
          </div>

          {/* Notice to Student */}
          <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100 text-[11px] text-blue-900 leading-relaxed">
            <strong className="font-bold block mb-0.5">📌 습득물 인계 필수 안내:</strong>
            습득하신 물품은 신속한 반환을 위해 빠른 시일 내 <strong>학생회관 406호 학생서비스팀</strong> 창구에 방문하여 실물을 인계해주시기 바랍니다.
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex items-center space-x-2">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#1B4F9C] to-[#00A1E9] hover:from-[#153e7a] hover:to-[#0284c7] text-white font-bold py-3 rounded-xl text-xs shadow-md transition-all active:scale-[0.98]"
            >
              습득물 피드에 등록하기
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl text-xs transition-colors"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
