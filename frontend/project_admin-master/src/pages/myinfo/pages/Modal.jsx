import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>주소 검색</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>도로명 주소 / 지역명 검색</Form.Label>
              <Form.Control
                type="text"
                placeholder='예) 판교역로 235, 삼평동 681'
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>검색 결과</Form.Label>
              <Form.Control as="textarea" rows={10} readOnly placeholder="도로명 + 건물번호 또는 지역명(동/리) + 번지로 검색을 하시면 더욱 정확한 결과가 검색됩니다." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            입력 취소
          </Button>
          <Button variant="primary">찾기 완료</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

