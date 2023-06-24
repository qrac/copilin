# Copilin

Copilin（コピリン）は、いくつかの要素をプレーンテキスト形式でクリップボードにコピーする拡張機能です。

- ブラウザアクションボタン：`ページタイトル ページURL` をコピー
- テキストリンク右クリック：`テキスト リンクURL` コピー用のメニューを表示

Source：https://github.com/qrac/copilin

## プライバシーへの取り組み

### 単一用途

ページのタイトルと URL をクリップボードにコピーし、SNS に貼り付けるため。
Copy the title and URL of the page to the clipboard and paste it on SNS.

### contextMenu が必要な理由

選択したテキストリンクをクリップボードにコピーするため。
To copy the selected text link to the clipboard.

### scripting が必要な理由

選択したテキストリンクまたはタブのタイトルとリンクをクリップボードにコピーするため。
To copy the title and link of the selected text link or tab to the clipboard.

### activeTab が必要な理由

タブのタイトルとリンクをクリップボードにコピーするため。
To copy tab titles and links to the clipboard.
