import {
  Checkbox,
  Button,
  Divider,
  MenuItem,
  Popover,
  Select,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
} from '@mui/material';
import { diff_match_patch, Diff } from 'diff-match-patch';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { Article, Content, Comment } from '../../backend/entities';
import { ContentType } from '../../types';
import { bracket_left, bracket_right, md5 } from '../../utils';
import PatchableArticle from './PatchableArticle';

function PureArticle({
  description,
  comments,
  contents,
}: {
  contents: Content[];
  comments: Comment[];
  description?: string;
}) {
  const contentsComponent = contents.map((part) => {
    const part_comments = comments.filter((i) => i.part_index === part.index);
    let text = part.text;
    let t = 0;
    const texts: string[] = [];
    if (part_comments.length) {
      for (const part_comment of part_comments) {
        const p = text.substr(t, part_comment.offset - t);
        texts.push(p);
        t += p.length;
      }
      if (t < text.length) {
        texts.push(text.substr(t));
      }
    } else {
      texts.push(text);
    }
    const content: (ReactElement | string)[] = [];
    texts.forEach((text, idx) => {
      content.push(<span key={`${md5(text)}-${idx}`}>{text}</span>);
      if (part_comments.length) {
        const comment_idx = part_comments.shift()!.index;
        content.push(
          <a
            key={Math.random()}
            href={`#comment${comment_idx}`}
            style={{ userSelect: 'none' }}
          >
            {bracket_left}
            {comment_idx}
            {bracket_right}
          </a>,
        );
      }
    });
    const key = part.id;
    if (part.type === ContentType.title) {
      return (
        <Typography
          key={key}
          variant="h5"
          sx={{ textAlign: 'center', margin: 4 }}
        >
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.appellation) {
      return (
        <Typography
          key={key}
          variant="body1"
          sx={{ margin: 0.5, fontWeight: 'bold' }}
        >
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.image) {
      return (
        <img
          key={key}
          src={part.text}
          width="50%"
          style={{ margin: 'auto', marginTop: '1.25em' }}
        />
      );
    } else if (part.type === ContentType.image_description) {
      return (
        <Typography
          key={key}
          variant="subtitle1"
          sx={{ textAlign: 'center', marginBottom: '1.25em' }}
        >
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.subdate) {
      return (
        <Typography key={key} variant="subtitle1" sx={{ textAlign: 'center' }}>
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.signature) {
      return (
        <Typography key={key} variant="subtitle1" sx={{ textAlign: 'right' }}>
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.subtitle) {
      return (
        <Typography
          key={key}
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            fontSize: '1.5em',
            fontWeight: 'bold',
            margin: '1.25em 0 1.25em 0',
          }}
        >
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.subtitle2) {
      return (
        <Typography
          key={key}
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            fontSize: '1.17em',
            fontWeight: 'bold',
            margin: '1.25em 0 1.25em 0',
          }}
        >
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.subtitle3) {
      return (
        <Typography
          key={key}
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            margin: '0.625em 0 0.625em 0',
          }}
        >
          {content}
        </Typography>
      );
    } else if (
      part.type === ContentType.subtitle4 ||
      part.type === ContentType.subtitle5
    ) {
      return (
        <Typography key={key} variant="subtitle1" sx={{ textAlign: 'center' }}>
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.paragraph) {
      return (
        <Typography
          key={key}
          variant="body1"
          sx={{ textIndent: '2em', margin: 0.5 }}
        >
          {content}
        </Typography>
      );
    } else if (part.type === ContentType.quotation) {
      return (
        <Stack spacing={1} key={key}>
          {part.text
            .split('\n')
            .filter((j) => j)
            .map((j, j_idx) => (
              <Typography variant="body1" key={j_idx} sx={{ color: 'grey' }}>
                {j}
              </Typography>
            ))}
        </Stack>
      );
    } else {
      return (
        <Typography
          key={key}
          variant="body1"
          sx={{ textIndent: '2em', margin: 0.5 }}
        >
          {content}
        </Typography>
      );
    }
  });
  const descriptionComponent = description ? (
    <>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        描述
      </Typography>
      <Stack spacing={1}>
        {description
          .split('\n')
          .filter((j) => j)
          .map((j, j_idx) => (
            <Typography variant="body1" key={j_idx}>
              {j}
            </Typography>
          ))}
      </Stack>
    </>
  ) : null;
  const commentsComponent = comments.filter((i) => i.index !== -1).length ? (
    <>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        注释
      </Typography>
      {comments
        .filter((i) => i.index !== -1)
        .map((i) => (
          <Stack direction="row" id={`comment${i.index}`} key={i.id}>
            <span style={{ userSelect: 'none' }}>
              {bracket_left}
              {i.index}
              {bracket_right}
            </span>
            <Stack spacing={1}>
              {i.text
                .split('\n')
                .filter((j) => j)
                .map((j, j_idx) => (
                  <Typography variant="body1" key={j_idx}>
                    {j}
                  </Typography>
                ))}
            </Stack>
          </Stack>
        ))}
    </>
  ) : null;

  return (
    <>
      {contentsComponent}
      {descriptionComponent}
      {commentsComponent}
    </>
  );
}

export default function ArticleComponent({
  article,
  comments,
  patchable,
  contents,
  publicationId,
  publicationName,
}: {
  publicationName?: string;
  publicationId: string;
  patchable?: boolean;
  article: Article;
  comments: Comment[];
  contents: Content[];
}) {
  const description = comments.find((i) => i.index === -1)?.text;
  contents = contents.sort((a, b) => (a.index > b.index ? 1 : -1));
  comments = comments.sort((a, b) => a.index - b.index);

  return patchable ? (
    <PatchableArticle
      article={article}
      comments={comments}
      contents={contents}
      description={description}
      publicationId={publicationId}
      publicationName={publicationName}
    />
  ) : (
    <PureArticle
      description={description}
      comments={comments}
      contents={contents}
    />
  );
}
