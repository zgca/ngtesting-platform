package com.ngtesting.platform.service.inf;

import com.ngtesting.platform.model.TstCustomFieldOption;

import java.util.List;

public interface CustomFieldOptionService extends BaseService {
    List<TstCustomFieldOption> listVos(Integer fieldId);
    TstCustomFieldOption save(TstCustomFieldOption option);
    boolean delete(Integer id);
    boolean changeOrderPers(Integer id, String act, Integer fieldId);

	List<TstCustomFieldOption> genVos(List<TstCustomFieldOption> pos);
    TstCustomFieldOption genVo(TstCustomFieldOption po);
}
