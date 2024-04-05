# nocostate
ノーコードの状態管理

JSONで状態遷移情報を設定すると、状態を管理するAPIが生成される

## モデル
```
StateEntity {
  id: string
  parentId: string
  currentState: string
  lastUpdate: date
  enableEvents: string[]
  entryState: string
  history: any[]
}
```

## ユースケース
- 状態定義
  - find(stateName)
- 状態エンティティ
  - findById(stateName, id)
  - findByParentId(stateName, parentId)
  - findByStates(stateName, states)
  - findByStatesWithRange(stateName, states, fromDate, ToDate)
  - entry(stateName, parentId)
  - transition(stateName, id, event, updateDate)
  - patch(stateName, id, state, updateDate)
