package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.TimeLimitedMembership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeLimitedMembershipRepository extends JpaRepository<TimeLimitedMembership, Long> {
}
