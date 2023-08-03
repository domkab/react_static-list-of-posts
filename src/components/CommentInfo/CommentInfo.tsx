import React from 'react';
import { Comments } from '../../types/Comments';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = (
  {
    comment:
      { name, email, body },
  },
) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href="mailto:Telly_Lynch@karl.co.uk"
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);
