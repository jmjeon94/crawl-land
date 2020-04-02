export function sort(arr, type, isUp) {
  // 문자 형식
  if (type === "동" || type === "단지명" || type === "현관구조") {
    if (isUp) {
      arr.sort(function(a, b) {
        // 오름차순
        return a[type] < b[type] ? -1 : a[type] > b[type] ? 1 : 0;
      });
    } else {
      arr.sort(function(a, b) {
        // 내림차순
        return a[type] > b[type] ? -1 : a[type] < b[type] ? 1 : 0;
      });
    }

    // 숫자형식
  } else {
    arr.sort(function(a, b) {
      // 오름차순
      let aa = "";
      let bb = "";
      if (a[type] === null) {
        aa = "0";
      } else {
        aa = a[type];
      }
      if (b[type] === null) {
        bb = "0";
      } else {
        bb = b[type];
      }

      var [c, d] = ["", ""];
      if (isUp) {
        [c, d] = transform(aa, bb, type);
      } else {
        [c, d] = transform(bb, aa, type);
      }
      return c - d;
    });
  }
  return arr;
}

function transform(a, b, type) {
  switch (type) {
    case "동":
    case "단지명":
    case "현관구조":
      return;
    case "입주년도":
      return [a.slice(0, 4) + a.slice(5, 7), b.slice(0, 4) + b.slice(5, 7)];

    case "총 세대수":
      return [
        str2int(a.slice(0, a.length - 2)),
        str2int(b.slice(0, b.length - 2))
      ];

    case "공급면적":
    case "전용면적":
    case "공급":
    case "전용":
      return [a.slice(0, a.length - 1), b.slice(0, b.length - 1)];

    case "매매가":
    case "전세가":
    case "갭":
    case "평당가":
      return [str2int(a), str2int(b)];

    case "전세가율":
      return [ratio2int(a), ratio2int(b)];

    case "No":
    case "세대수":
    case "방 수":
    case "화장실 수":
    case "매매":
    case "전세":
    case "월세":
      return [a, b];

    default:
      alert("Type Error in Sorting.js");
  }
}

function str2int(ch) {
  // 2억 5천~2억 8천 => 25000

  // [0]=>최저가로 비교, [1]=>최고가로 비교
  if (ch.includes("~")) {
    ch = ch.split("~")[0];
  }

  if (ch.includes("억")) {
    if (ch[ch.length - 1] === "억") {
      ch = ch.slice(0, ch.length - 1) + "0000";
    } else {
      let [eok, cheon] = ch.split("억");
      if (cheon.includes(",")) {
        // slice(1)은 공백제거
        cheon = cheon.slice(1).replace(",", "");
      }
      // 8억 500 => 80500 (' 500' => '0500')
      else {
        cheon = "0".repeat(5 - cheon.length) + cheon.slice(1);
      }
      ch = eok + cheon;
    }
  } else {
    if (ch.includes(",")) {
      ch = ch.replace(",", "");
    }
  }

  return ch;
}

function ratio2int(ratio) {
  if (ratio.includes("~")) {
    return ratio.split("~")[0];
  } else {
    return ratio.slice(0, ratio.length - 1);
  }
}
