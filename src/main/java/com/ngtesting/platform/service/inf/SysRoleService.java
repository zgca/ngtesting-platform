package com.ngtesting.platform.service.inf;

import com.ngtesting.platform.model.SysRole;
import com.ngtesting.platform.vo.Page;

public interface SysRoleService extends BaseService {

	Page listByPage(Integer orgId, String keywords, String disabled, Integer currentPage, Integer itemsPerPage);

	SysRole save(SysRole vo, Integer orgId);
	boolean delete(Integer id);
	boolean disable(Integer id);

}
