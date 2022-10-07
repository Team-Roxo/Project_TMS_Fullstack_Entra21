package br.com.entra21.teamroxo.TMSProject.interfaces;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.RegisterQuote;

@Repository
@EnableJpaRepositories
public interface RegisterQuoteRepository extends JpaRepository<RegisterQuote, Integer> {

	@Query("FROM RegisterQuote WHERE carrier_id = :carrierId")
	List<RegisterQuote> findPackByCarrierId(@Param("carrierId") int id);
	
	@Query("FROM RegisterQuote WHERE pessoa_id = :userId")
	List<RegisterQuote> findPackByUserId(@Param("userId") int id);
	
	@Query("FROM RegisterQuote WHERE pessoa_id = :userId and post BETWEEN :lastWeek and :now")
	List<RegisterQuote> findPackByUserIdRecent(@Param("userId") int id, @Param("now") LocalDate now, @Param("lastWeek") LocalDate lastWeek);
	
	@Query("FROM RegisterQuote WHERE carrier_id = :carrierId and post BETWEEN :lastWeek and :now")
	List<RegisterQuote> findPackByCarrierIdRecent(@Param("carrierId") int id, @Param("now") LocalDate now, @Param("lastWeek") LocalDate lastWeek);
	
}
