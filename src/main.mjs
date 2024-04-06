import { Domain, Value, value } from "./nocostate/nocostate.mjs";


const 契約 = new Domain(
  value("契約"),
  ["申込中","キャンセル", "契約中", "契約終了申込中", "契約終了"].map(value),
  ["申込","契約開始", "契約終了申込", "契約終了"].map(value)
)
var 契約遷移 = [
  ["start", "申込", "申込中"],
  ["未開通", "開通", "開通", {domain:"契約", event: "契約開始"}],
]

const 回線 = new Domain(
  value("回線"),
  ["start", "未開通", "開通", "廃止中", "廃止"].map(value),
  []
)

var 回線遷移 = [
  ["start", {domain:"契約", state:"申込中"}, "未開通", []],
  ["未開通", "開通", "開通", {domain:"契約", event: "契約開始"}],
]