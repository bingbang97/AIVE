package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.CountBasedMembership;
import com.ssafy.d102.data.entity.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountBasedMembershipRepository extends JpaRepository<CountBasedMembership, Long> {
    Optional<CountBasedMembership> getCountBasedMembershipRepositoryByMembership(Membership membership);
}
