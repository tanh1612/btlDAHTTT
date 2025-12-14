export class ArticleApprovalHistory {
  constructor(
    approval_id,
    article_id,
    approver_id,
    action,
    reason,
    action_time
  ) {
    this.approval_id = approval_id;
    this.article_id = article_id;
    this.approver_id = approver_id;
    this.action = action;
    this.reason = reason;
    this.action_time = action_time;
  }
}
