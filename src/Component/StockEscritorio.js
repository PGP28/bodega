import React, { useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

function StockEscritorio() {
  const [stockData, setStockData] = useState([
    { codigo: '01 - 01', articulo: 'ACCOCLIPS', minimo: 0, actual: 38, precio: '' },
    { codigo: '01 - 02', articulo: 'APRETADOR METALICO', minimo: 0, actual: 9, precio: '' },
    { codigo: '01 - 03', articulo: 'ARCHIVADOR CARTA LOMO ANCHO', minimo: 0, actual: 48, precio: '' },
    { codigo: '01 - 04', articulo: 'ARCHIVADOR CARTA LOMO ANGOSTO', minimo: 0, actual: 5, precio: '' },
    { codigo: '01 - 05', articulo: 'ARCHIVADOR LETRAS', minimo: 0, actual: 24, precio: '' },
    { codigo: '01 - 06', articulo: 'ARCHIVADOR OFICIO LOMO ANCHO', minimo: 0, actual: 36, precio: '' },
    { codigo: '01 - 07', articulo: 'ARCHIVADOR OFICIO LOMO ANGOSTO', minimo: 0, actual: 23, precio: '' },
    { codigo: '01 - 08', articulo: 'ALMOHADILLA PIZARRA', minimo: 0, actual: 10, precio: '' },
    { codigo: '02 - 01', articulo: 'BLOCK FISCAL OFICIO BLANCO', minimo: 0, actual: 18, precio: '' },
    { codigo: '02 - 02', articulo: 'BROCHE DORADO 25 M/M', minimo: 0, actual: 4, precio: '' },
    { codigo: '02 - 03', articulo: 'BROCHE DORADO 32 M/MJ', minimo: 0, actual: 10, precio: '' },
    { codigo: '02 - 04', articulo: 'BROCHE DORADO 19 M/M', minimo: 0, actual: 27, precio: '' },
    { codigo: '02 - 05', articulo: 'BROCHE DORADO 51 M/M', minimo: 0, actual: 5, precio: '' },
  ]);

  const [newItem, setNewItem] = useState({ codigo: '', articulo: '', minimo: 0, actual: 0, precio: '' });
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setStockData([...stockData, newItem]);
    setNewItem({ codigo: '', articulo: '', minimo: 0, actual: 0, precio: '' });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    setStockData(stockData.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const itemToEdit = stockData[index];
    setNewItem(itemToEdit);
    setStockData(stockData.filter((_, i) => i !== index));
    setShowForm(true);
  };

  return (
    <div>
      <Container>
        <h2 className="text-center my-4">LISTADO DE SALDOS</h2>
        <h4 className="text-center mb-4">ESCRITORIO - 07/10/2024</h4>

        {!showForm && (
          <Button className="mb-3" onClick={() => setShowForm(true)}>
            Agregar Nuevo
          </Button>
        )}

        {showForm && (
          <Form className="mb-4">
            <Form.Group controlId="codigo">
              <Form.Label>Codigo</Form.Label>
              <Form.Control
                type="text"
                value={newItem.codigo}
                onChange={(e) => setNewItem({ ...newItem, codigo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="articulo">
              <Form.Label>Articulo</Form.Label>
              <Form.Control
                type="text"
                value={newItem.articulo}
                onChange={(e) => setNewItem({ ...newItem, articulo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="minimo">
              <Form.Label>Minimo</Form.Label>
              <Form.Control
                type="number"
                value={newItem.minimo}
                onChange={(e) => setNewItem({ ...newItem, minimo: Number(e.target.value) })}
              />
            </Form.Group>
            <Form.Group controlId="actual">
              <Form.Label>Actual</Form.Label>
              <Form.Control
                type="number"
                value={newItem.actual}
                onChange={(e) => setNewItem({ ...newItem, actual: Number(e.target.value) })}
              />
            </Form.Group>
            <Form.Group controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                value={newItem.precio}
                onChange={(e) => setNewItem({ ...newItem, precio: e.target.value })}
              />
            </Form.Group>
            <Button className="mt-2 me-2" onClick={handleAdd}>Guardar</Button>
            <Button className="mt-2" variant="secondary" onClick={() => setShowForm(false)}>Cancelar</Button>
          </Form>
        )}

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Articulo</th>
              <th>Minimo</th>
              <th>Actual</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.articulo}</td>
                <td>{item.minimo || 'N/A'}</td>
                <td>{item.actual || 'N/A'}</td>
                <td>{item.precio || 'N/A'}</td>
                <td>
                  <Button variant="warning" className="me-2" onClick={() => handleEdit(index)}>
                    <FaPencilAlt />
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default StockEscritorio;
