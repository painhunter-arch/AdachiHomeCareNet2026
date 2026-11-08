// Adachi健やかNet（AdachiHomeCareNet2026）の保存先の設定
// ここに書くのは識別子だけです（パスワードや秘密鍵は書かない）。患者データは書かない。
window.AHCN_CONFIG = {
  // "onedrive"：下の共有フォルダに固定（全員が同じフォルダを使う） / "local"：各自がパソコンの同期フォルダを選ぶ（旧方式）
  storage: "onedrive",
  // Microsoft Entra ID のテナントID（ディレクトリID）。情報システム部門に確認
  tenantId: "",
  // Entra ID に登録したこのアプリの「アプリケーション（クライアント）ID」
  clientId: "",
  // データを置く OneDrive／SharePoint のフォルダの共有リンク（「リンクをコピー」で得られるURL）
  folderShareUrl: "",
  // 空欄なら、このページのURLを使う（Entra ID の「リダイレクトURI」と同じにすること）
  redirectUri: ""
};
