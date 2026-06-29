const categoryLabels = {
  general: "General",
  luck: "Luck",
  wealth: "Wealth",
  love: "Relationship",
  career: "Career",
  health: "Health",
  travel: "Person / Travel",
  lost: "Lost item",
  spiritual: "Spiritual"
};

const categoryKeywords = [
  ["wealth", ["money", "wealth", "finance", "financial", "invest", "investment", "stock", "crypto", "price", "salary", "income", "profit", "buy", "sell", "business deal", "求财", "财富", "钱", "投资", "股票", "买", "卖", "生意"]],
  ["love", ["love", "relationship", "partner", "marriage", "marry", "dating", "date", "romance", "breakup", "ex", "感情", "恋爱", "婚姻", "对象", "复合", "分手"]],
  ["career", ["career", "job", "work", "boss", "company", "interview", "offer", "project", "client", "meeting", "promotion", "quit", "hire", "事业", "工作", "老板", "面试", "项目", "客户", "升职", "辞职"]],
  ["health", ["health", "body", "sick", "illness", "doctor", "hospital", "pain", "medicine", "medical", "身体", "健康", "生病", "医院", "医生", "疼", "病"]],
  ["travel", ["travel", "trip", "flight", "drive", "move", "arrive", "person", "reply", "message", "waiting", "come back", "visit", "出行", "旅行", "航班", "搬家", "行人", "回来", "消息", "回复", "到"]],
  ["lost", ["lost", "missing", "find", "where is", "recover", "失物", "丢", "找", "遗失"]],
  ["spiritual", ["spirit", "ghost", "energy", "ritual", "神鬼", "鬼", "灵", "冲犯", "风水"]],
  ["luck", ["luck", "fortune", "timing", "today", "tomorrow", "decision", "chance", "运势", "时机", "机会", "决定", "今日", "明日"]]
];

const palaces = [
  {
    name: "大安",
    nature: "good",
    label: "Stable",
    song: "Body stays still; calm brings safety.",
    verdict: "A calm yes. This is best for steady decisions, protecting what already works, and choosing the low-drama path.",
    meaning: "吉卦. The tone is settled and protective, but it is a still palace: good for holding course, confirming plans, and avoiding unnecessary motion.",
    advice: {
      general: "This favors a steady yes. Make the decision if it protects stability; avoid changing too many things at once.",
      luck: "Momentum is stable rather than explosive. Keep the current rhythm and let progress compound.",
      wealth: "Good for preserving money, collecting what is due, or continuing an existing plan. Avoid aggressive expansion.",
      love: "Stable feelings are favored, but freshness may be low. Choose patient communication over forcing excitement.",
      career: "Work is steady and can receive support from seniors or management. Do not show off or overplay your advantage.",
      health: "The sign is mostly safe, but it asks for rest, clean food, and avoiding overwork. This is not medical advice.",
      travel: "The person or trip is basically safe, though movement may be quiet or slow. Do not push for instant contact.",
      lost: "The item is likely not moving far. Search calm, familiar, settled places first.",
      spiritual: "The sign is protective. If you are worried, simple calming and cleanup are favored over dramatic action."
    }
  },
  {
    name: "留连",
    nature: "bad",
    label: "Wait",
    song: "The matter lingers; timing has not arrived.",
    verdict: "Not the best moment. Delay, entanglement, or slow movement is likely, so reduce the decision size.",
    meaning: "凶卦. It points to obstruction, lingering issues, and repeated back-and-forth. The safer move is to wait, simplify, and avoid binding commitments.",
    advice: {
      general: "Wait if you can. The matter is tangled, and a quick decision may create more follow-up work.",
      luck: "Energy is slow and blocked. Focus on clearing one obstacle instead of starting something new.",
      wealth: "Poor for chasing money or risk. Watch for costs caused by other people or delays.",
      love: "Communication may stall or loop into coldness. Do not try to win by pressure; aim for clarity.",
      career: "There may be obstruction from a manager, teammate, or hidden process. Keep records and move carefully.",
      health: "Stress or digestion may be the theme. Rest and professional care matter more than guessing. This is not medical advice.",
      travel: "The person is safe but delayed or distracted. Travel/contact may take longer than expected.",
      lost: "The item is not far, but it is caught under/behind/among other things. Search slowly and retrace.",
      spiritual: "This points to lingering unease. Keep the response simple and grounded; avoid escalation."
    }
  },
  {
    name: "速喜",
    nature: "good",
    label: "Act",
    song: "Good news arrives quickly.",
    verdict: "A strong yes for timely action. If the question needs speed, this is one of the best signs.",
    meaning: "吉卦. It favors prompt action, messages, arrivals, and decisions that benefit from momentum. Move cleanly before the window passes.",
    advice: {
      general: "Act soon. The useful window is open, especially for decisions that need momentum or quick response.",
      luck: "Luck is opening. A direct move is more useful than more waiting.",
      wealth: "Money can come, but the note warns of money moving in and out. Take profit or define an exit quickly.",
      love: "New relationships heat up quickly. Existing relationships need kind words because speed can also sharpen arguments.",
      career: "Good for pushing work forward, but double-check documents, messages, and details before sending.",
      health: "The note points to circulation, heart/head pressure themes. Treat this as a prompt to monitor and seek care if needed, not as diagnosis.",
      travel: "The person is close or the trip should move quickly. Send the message, confirm the route, and be ready.",
      lost: "Search immediately and ask quickly; the trail is still warm.",
      spiritual: "The disturbance, if any, is active but can clear quickly with a practical response."
    }
  },
  {
    name: "赤口",
    nature: "bad",
    label: "Careful",
    song: "Sharp words and disputes are likely.",
    verdict: "Proceed carefully. Conflict, argument, or avoidable mistakes may surface, especially if you speak too fast.",
    meaning: "凶卦. It warns of disputes, sharp words, exposure, and friction. If action is unavoidable, use facts, boundaries, and written confirmation.",
    advice: {
      general: "This is not a smooth moment. If the matter is large and urgent, act decisively; if it is small, delay.",
      luck: "The field is noisy and unstable. Avoid drama, impulsive replies, and public confrontation.",
      wealth: "Money may swing up and down. Avoid emotional trades, unclear deals, and arguments over terms.",
      love: "Arguments or hurt words are the main risk. Pause before replying and avoid forcing a final answer tonight.",
      career: "Better for physical, enforcement, repair, or conflict-handling work than delicate office politics. Put agreements in writing.",
      health: "The note flags chest/respiratory/injury themes. Treat symptoms seriously and use medical care when needed. This is not medical advice.",
      travel: "The person may be caught in trouble or conflict. Confirm safety and details before assuming intent.",
      lost: "There may be damage, exposure, or a dispute around the item. Ask directly but calmly.",
      spiritual: "This is the most quarrelsome sign. Keep rituals or responses simple; avoid fear-driven choices."
    }
  },
  {
    name: "小吉",
    nature: "good",
    label: "Favorable",
    song: "Small good fortune arrives.",
    verdict: "Generally favorable. Good enough for practical action, especially if the decision is modest and well-scoped.",
    meaning: "吉卦. It is positive but moderate: not as settled as 大安 and not as fast as 速喜. It favors help from people and small wins.",
    advice: {
      general: "A measured yes. Keep the plan modest, use support from others, and let the result grow step by step.",
      luck: "The trend is improving. Maintaining the current direction should bring better results.",
      wealth: "Money can come through people, referrals, clients, or cooperation. Keep the deal clean and fair.",
      love: "Good for introductions, reconciliation, or smooth daily connection. Gentle effort works better than grand gestures.",
      career: "Work is favorable, especially with teams. Pay attention to finances, approvals, and communication with juniors.",
      health: "The note points to liver/gallbladder/digestion themes but says the issue is not usually large. Still use professional care when needed.",
      travel: "The person is close or likely to arrive. Coordination should improve soon.",
      lost: "A helper or small clue may lead you to it. Ask someone nearby.",
      spiritual: "Ancestral/home context may matter in the traditional reading, but the practical advice is to restore order at home."
    }
  },
  {
    name: "空亡",
    nature: "bad",
    label: "Unclear",
    song: "Signals are thin; the result is hard to form.",
    verdict: "Not ideal. Missing information, uncertainty, or an empty result may undercut the decision.",
    meaning: "凶卦. It points to uncertainty, emptiness, and unstable judgment. Pause, gather evidence, and avoid forcing a conclusion.",
    advice: {
      general: "Do not force it now. The reading suggests missing information or a result that may not materialize.",
      luck: "Your judgment may feel scattered. Ask for another view and delay final commitment if possible.",
      wealth: "Weak for obtaining money. Preserve cash, reduce exposure, and do not chase unclear returns.",
      love: "Outside factors, uncertainty, or unresolved tension may interfere. Ask what is actually known before deciding.",
      career: "Work may be undermined by rumors, unclear ownership, or someone else's issue. Document facts and avoid blind trust.",
      health: "The note points to digestion, nervous system, or hard-to-pin-down discomfort. Please use medical care for real symptoms.",
      travel: "The person or trip may be blocked by trouble on the way. Confirm before acting on assumptions.",
      lost: "The item may be hard to recover right now or the information is incomplete. Wait for a clearer clue.",
      spiritual: "Traditional readings connect this with house/ancestral disturbance. Practically, stabilize the environment before deciding."
    }
  }
];

const branches = [
  ["子时", 1, "23:00-00:59"],
  ["丑时", 2, "01:00-02:59"],
  ["寅时", 3, "03:00-04:59"],
  ["卯时", 4, "05:00-06:59"],
  ["辰时", 5, "07:00-08:59"],
  ["巳时", 6, "09:00-10:59"],
  ["午时", 7, "11:00-12:59"],
  ["未时", 8, "13:00-14:59"],
  ["申时", 9, "15:00-16:59"],
  ["酉时", 10, "17:00-18:59"],
  ["戌时", 11, "19:00-20:59"],
  ["亥时", 12, "21:00-22:59"]
];

const elements = {
  timeInput: document.querySelector("#timeInput"),
  questionInput: document.querySelector("#questionInput"),
  monthInput: document.querySelector("#monthInput"),
  dayInput: document.querySelector("#dayInput"),
  momentInput: document.querySelector("#momentInput"),
  nowButton: document.querySelector("#nowButton"),
  revealButton: document.querySelector("#revealButton"),
  luckyButton: document.querySelector("#luckyButton"),
  calendarNote: document.querySelector("#calendarNote"),
  actionNote: document.querySelector("#actionNote"),
  detailsPanel: document.querySelector("#detailsPanel"),
  resultName: document.querySelector("#resultName"),
  resultVerdict: document.querySelector("#resultVerdict"),
  resultBadge: document.querySelector("#resultBadge"),
  categoryBadge: document.querySelector("#categoryBadge"),
  monthNumber: document.querySelector("#monthNumber"),
  dayNumber: document.querySelector("#dayNumber"),
  momentNumber: document.querySelector("#momentNumber"),
  pathList: document.querySelector("#pathList"),
  customTitle: document.querySelector("#customTitle"),
  customAnswer: document.querySelector("#customAnswer"),
  timingAdvice: document.querySelector("#timingAdvice"),
  meaningTitle: document.querySelector("#meaningTitle"),
  meaningText: document.querySelector("#meaningText"),
  contextText: document.querySelector("#contextText")
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function toDateTimeLocal(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function fromDateTimeLocal(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseChineseNumber(value) {
  if (!value) return null;
  const arabic = value.match(/\d+/);
  if (arabic) return Number(arabic[0]);

  const clean = value
    .replace(/[年月日\s]/g, "")
    .replace(/^闰/, "")
    .replace(/^初/, "")
    .replace("正", "一")
    .replace("冬", "十一")
    .replace("腊", "十二");

  const digits = { "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9 };
  if (digits[clean]) return digits[clean];
  if (clean === "十") return 10;
  if (clean.startsWith("十")) return 10 + (digits[clean.slice(1)] || 0);
  if (clean.includes("十")) {
    const [tens, ones] = clean.split("十");
    return (digits[tens] || 1) * 10 + (digits[ones] || 0);
  }
  if (clean.startsWith("廿")) return 20 + (digits[clean.slice(1)] || 0);
  if (clean.startsWith("卅")) return 30 + (digits[clean.slice(1)] || 0);
  return null;
}

function getAutoLunar(date) {
  const formatters = [
    new Intl.DateTimeFormat("zh-CN-u-ca-chinese", { month: "long", day: "numeric" }),
    new Intl.DateTimeFormat("en-u-ca-chinese", { month: "numeric", day: "numeric" })
  ];

  for (const formatter of formatters) {
    const parts = formatter.formatToParts(date);
    const monthPart = parts.find((part) => part.type === "month")?.value;
    const dayPart = parts.find((part) => part.type === "day")?.value;
    const month = parseChineseNumber(monthPart);
    const day = parseChineseNumber(dayPart);
    if (month >= 1 && month <= 12 && day >= 1 && day <= 30) {
      return { month, day, source: formatter.resolvedOptions().locale };
    }
  }

  return null;
}

function getHourBranch(date) {
  const hour = date.getHours();
  const number = hour === 23 ? 1 : Math.floor((hour + 1) / 2) + 1;
  const branch = branches[number - 1];
  return { name: branch[0], number: branch[1], range: branch[2] };
}

function countFrom(startIndex, count) {
  return (startIndex + count - 1) % palaces.length;
}

function calculate(month, day, momentNumber) {
  const monthIndex = countFrom(0, month);
  const dayIndex = countFrom(monthIndex, day);
  const finalIndex = countFrom(dayIndex, momentNumber);

  return {
    monthResult: palaces[monthIndex],
    dayResult: palaces[dayIndex],
    finalResult: palaces[finalIndex]
  };
}

function detectCategory(question) {
  const normalized = question.trim().toLowerCase();
  if (!normalized) return "general";

  for (const [category, keywords] of categoryKeywords) {
    if (keywords.some((keyword) => normalized.includes(keyword.toLowerCase()))) {
      return category;
    }
  }

  return "general";
}

function getBlend(reading) {
  const score = [reading.monthResult, reading.dayResult, reading.finalResult].reduce((total, palace) => {
    return total + (palace.nature === "good" ? 1 : -1);
  }, 0);

  if (reading.finalResult.nature === "good" && score >= 1) {
    return "The final palace is favorable and the background does not strongly fight it.";
  }
  if (reading.finalResult.nature === "good") {
    return "The final palace is favorable, but the background is mixed; keep the action smaller and cleaner.";
  }
  if (score >= 1) {
    return "The final palace is cautious, even though the background has support; wait for a cleaner moment if the stakes are high.";
  }
  return "The final palace and background both ask for caution; this is better for review than commitment.";
}

function getTimingAdvice(final, category) {
  if (final.name === "速喜") return "Best move: act soon, but keep the action precise.";
  if (final.name === "大安") return "Best move: proceed steadily, or preserve the current stable plan.";
  if (final.name === "小吉") return "Best move: proceed in a modest, practical way and use help from people.";
  if (final.name === "留连") return "Best move: delay, simplify, and avoid locking yourself into a messy choice.";
  if (final.name === "赤口") return "Best move: pause before speaking or signing; confirm facts in writing.";
  if (category === "health") return "Best move: do not guess; use this as a reflection prompt and seek real medical advice for symptoms.";
  return "Best move: gather missing information before deciding.";
}

function getCustomAnswer(question, category, reading) {
  const final = reading.finalResult;
  const topic = categoryLabels[category];
  const questionLead = question.trim() ? `For "${question.trim()}", ` : "";

  return {
    title: `${topic} answer`,
    answer: `${questionLead}${final.name} suggests: ${final.advice[category] || final.advice.general}`,
    timing: `${getTimingAdvice(final, category)} ${getBlend(reading)}`,
    context: `Month background: ${reading.monthResult.name}. Day influence: ${reading.dayResult.name}. Final time palace: ${final.name}. In this app, the final time palace carries the main answer, while month and day explain the surrounding conditions.`
  };
}

function resetOutput(message) {
  elements.resultName.textContent = "Veiled";
  elements.resultVerdict.textContent = message;
  elements.resultBadge.textContent = "Hidden";
  elements.resultBadge.className = "badge neutral";
  elements.categoryBadge.textContent = "Category: -";
  elements.monthNumber.textContent = "-";
  elements.dayNumber.textContent = "-";
  elements.momentNumber.textContent = "-";
  elements.pathList.innerHTML = "";
  elements.customTitle.textContent = "Custom answer";
  elements.customAnswer.textContent = "";
  elements.timingAdvice.textContent = "";
  elements.meaningTitle.textContent = "Meaning";
  elements.meaningText.textContent = "";
  elements.contextText.textContent = "";
  elements.detailsPanel.hidden = true;
}

function hideReading(message = "Ask a question, then reveal the destiny. Or try a lucky draw.") {
  resetOutput(message);
}

function prepareInputs() {
  const date = fromDateTimeLocal(elements.timeInput.value);
  if (!date) {
    return { error: "Select a valid time to calculate." };
  }

  const autoLunar = getAutoLunar(date);
  if (!autoLunar) {
    elements.monthInput.textContent = "-";
    elements.dayInput.textContent = "-";
    elements.calendarNote.textContent = "Auto lunar date unavailable in this browser.";
    return { error: "Auto lunar date is unavailable. Try another browser or device." };
  }

  const month = autoLunar.month;
  const day = autoLunar.day;
  const momentValue = elements.momentInput.value.trim();
  const momentNumber = momentValue ? Number(momentValue) : null;
  const hour = getHourBranch(date);
  const countNumber = momentNumber || hour.number;
  const countLabel = momentNumber ? "moment number" : `${hour.name} / automatic Chinese hour`;
  elements.monthInput.textContent = month;
  elements.dayInput.textContent = day;
  elements.calendarNote.textContent = `Auto lunar date: ${month}/${day}`;

  if (!(month >= 1 && month <= 12 && day >= 1 && day <= 30)) {
    return { error: "Auto lunar month/day is outside the expected range." };
  }

  if (momentValue && (!Number.isInteger(momentNumber) || momentNumber < 1)) {
    return { error: "Enter a whole moment number of 1 or higher." };
  }

  const reading = calculate(month, day, countNumber);
  return { month, day, countNumber, countLabel, reading };
}

function showReading(prepared, options = {}) {
  const { month, day, countNumber, countLabel, reading } = prepared;
  const final = reading.finalResult;
  const question = options.question ?? elements.questionInput.value;
  const category = detectCategory(question);
  const custom = getCustomAnswer(question, category, reading);

  elements.detailsPanel.hidden = false;
  elements.monthNumber.textContent = month;
  elements.dayNumber.textContent = day;
  elements.momentNumber.textContent = countNumber;
  elements.resultName.textContent = final.name;
  elements.resultVerdict.textContent = final.verdict;
  elements.resultBadge.textContent = final.label;
  elements.resultBadge.className = `badge ${final.nature === "good" ? "good" : "bad"}`;
  elements.categoryBadge.textContent = `Category: ${categoryLabels[category]}`;
  elements.customTitle.textContent = options.mode === "lucky" ? "Lucky draw answer" : custom.title;
  elements.customAnswer.textContent = custom.answer;
  elements.timingAdvice.textContent = custom.timing;
  elements.meaningTitle.textContent = `${final.name} Meaning`;
  elements.meaningText.textContent = `${final.song} ${final.meaning}`;
  elements.contextText.textContent = custom.context;

  elements.pathList.innerHTML = "";
  [
    ["Start at 大安, count lunar month", `${month} → ${reading.monthResult.name}`],
    [`From ${reading.monthResult.name}, count lunar day`, `${day} → ${reading.dayResult.name}`],
    [`From ${reading.dayResult.name}, count ${countLabel}`, `${countNumber} → ${final.name}`]
  ].forEach(([label, value]) => {
    const item = document.createElement("li");
    item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    elements.pathList.appendChild(item);
  });
}

function revealDestiny() {
  elements.actionNote.textContent = "";
  const question = elements.questionInput.value.trim();

  if (!question) {
    hideReading("Type your customized question first, then reveal the destiny.");
    elements.actionNote.textContent = "Reveal the Destiny needs your question. Lucky Draw works without one.";
    elements.questionInput.focus();
    return;
  }

  const prepared = prepareInputs();
  if (prepared.error) {
    hideReading(prepared.error);
    elements.actionNote.textContent = prepared.error;
    return;
  }

  showReading(prepared, { mode: "question", question });
}

function luckyDraw() {
  elements.actionNote.textContent = "";

  const momentNumber = Math.floor(Math.random() * 99) + 1;
  elements.momentInput.value = momentNumber;

  const prepared = prepareInputs();
  if (prepared.error) {
    hideReading(prepared.error);
    elements.actionNote.textContent = prepared.error;
    return;
  }

  elements.calendarNote.textContent = `${elements.calendarNote.textContent} Lucky Draw chose ${momentNumber}.`;
  showReading(prepared, { mode: "lucky", question: elements.questionInput.value });
}

elements.nowButton.addEventListener("click", () => {
  elements.timeInput.value = toDateTimeLocal(new Date());
  prepareInputs();
  hideReading();
});

elements.revealButton.addEventListener("click", revealDestiny);
elements.luckyButton.addEventListener("click", luckyDraw);

[elements.timeInput, elements.momentInput, elements.questionInput].forEach((element) => {
  element.addEventListener("input", () => {
    elements.actionNote.textContent = "";
    prepareInputs();
    hideReading();
  });
});

elements.timeInput.value = toDateTimeLocal(new Date());
prepareInputs();
hideReading();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}
