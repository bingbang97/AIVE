package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.request.OrganizationLoginDto;
import com.ssafy.d102.data.dto.request.OrganizationUpdatePwDto;

import java.util.List;

public interface OrganizationService {
    OrganizationDto loginOrganization(OrganizationLoginDto input);

    void registOrganization(OrganizationDto input);

    List<OrganizationDto> getAllOrganization();

    OrganizationDto getOrganization(String organizationId);

    OrganizationDto updateOrganization(OrganizationDto organizationDto);

    boolean validOrganizationId(String organizationId);

    void changePw(OrganizationUpdatePwDto organizationUpdatePwDto);

}