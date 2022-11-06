import { useMemo } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import Map from "../../app/ui/map";
import { useLaunches } from "./hooks";

const Launches: React.FC = () => {
  const { data, isLoading, isSuccess, isError } = useLaunches();

  const mapData = useMemo(() => {
    return (
      data?.map(({ pad, name }) => ({
        latitude: pad.latitude,
        longitude: pad.longitude,
        title: name,
      })) || []
    );
  }, [data]);
  return (
    <Container>
      {isLoading && (
        <Row>
          <Col>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )}
      {isError && (
        <Row>
          <Col>
            <Alert variant="danger">Unexpected error occurred.</Alert>
          </Col>
        </Row>
      )}
      {isSuccess && <Map locations={mapData} />}
    </Container>
  );
};

export default Launches;
