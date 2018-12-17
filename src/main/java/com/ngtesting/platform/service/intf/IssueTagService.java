package com.ngtesting.platform.service.intf;

import com.ngtesting.platform.model.IsuTag;
import com.ngtesting.platform.model.TstUser;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface IssueTagService extends BaseService {
    List<IsuTag> search(Integer issueId, Integer orgId, String keywords, List<Integer> exceptIds);

    @Transactional
    void save(Integer issueId, List<Map> tags, TstUser user);
    Boolean delete(Integer id, TstUser user);
}
