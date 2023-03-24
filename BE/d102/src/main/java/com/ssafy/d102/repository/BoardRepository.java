package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.Board;
import com.ssafy.d102.data.entity.CCTV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository  extends JpaRepository<Board, Long> {
}
