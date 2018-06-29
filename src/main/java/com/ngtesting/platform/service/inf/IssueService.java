package com.ngtesting.platform.service.inf;

import com.ngtesting.platform.model.TstCase;

import java.util.List;

public interface IssueService extends BaseService {

	List<TstCase> query(Integer projectId);

	TstCase getById(Integer caseId);

}
