# Sitao Chen 的博客

Jekyll 个人博客。首页布局参考 Jiaxuan Zou 的学术主页；页面、样式和交互独立实现，未复制其个人资料或文章。

网站：https://fudan-chen.github.io/sitaochen1212.github.io/

## 发布文章

1. 在 `_posts/` 新建 `YYYY-MM-DD-slug.md`，例如 `2026-10-14-first-note.md`。
2. 复制 `_drafts/article-template.md` 的开头，填写标题、日期、摘要和正文。
3. 将修改提交到 `main`。GitHub Pages 会自动构建发布；进度见仓库的 Actions。

文章模板：

```markdown
---
layout: post
title: "文章标题"
date: 2026-10-14
description: "一句话介绍这篇文章。"
tags: [学习笔记]
math: false
---

这里开始写正文。
```

文章地址格式：`/blog/年份/slug/`。发布后尽量保留 slug，以免已有链接改变。

未写完的文章放在 `_drafts/`，不会上线。图片放在 `assets/images/`，引用方式：

```markdown
![图片说明]({{ '/assets/images/example.png' | relative_url }})
```

`math: true` 启用 MathJax。行内公式用 `\( ... \)`，独立公式用 `$$ ... $$`；公式渲染需要浏览器能访问 jsDelivr。

## 修改个人介绍

- `_config.yml`：姓名、站点简介、GitHub 链接；配置 `avatar` 可使用自己的头像路径。
- `index.html`：首页介绍与关注方向。
- `about.md`：完整个人介绍。
- `assets/css/site.css`：颜色和布局。

## 本地预览

安装 Ruby 3.3+ 和 Bundler 后，在仓库目录运行：

```bash
bundle install
bundle exec jekyll serve
```

打开终端显示的本地地址（包含 `/sitaochen1212.github.io/` 路径）。如需预览草稿，加 `--drafts`。

## GitHub Pages 设置

Settings → Pages → Deploy from a branch → `main` → `/ (root)`。

当前账号是 `fudan-chen`，因此这个仓库发布为项目网站。若以后迁移到个人根站点，调整 `_config.yml` 中的 `url` 和 `baseurl`，并更新本文的网站地址。

参考：[Jiaxuan Zou 的网站源码](https://github.com/JiaxuanZou0714/jiaxuanzou0714.github.io)。
