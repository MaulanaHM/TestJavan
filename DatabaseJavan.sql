-- DROP SCHEMA "family";

CREATE SCHEMA "family" AUTHORIZATION postgres;

-- "family".data_keluarga definition

-- Drop table

-- DROP TABLE "family".data_keluarga;

CREATE TABLE "family".data_keluarga (
	id_data_keluarga serial NOT NULL,
	nama_keluarga varchar NULL,
	jenis_kelamin varchar NULL,
	"level" int4 NULL,
	create_at timestamp(0) NULL DEFAULT now(),
	id_parent int4 NULL,
	CONSTRAINT data_keluarga_pk PRIMARY KEY (id_data_keluarga)
);
CREATE INDEX data_keluarga_id_data_keluarga_idx ON family.data_keluarga USING btree (id_data_keluarga);


-- "family".data_aset definition

-- Drop table

-- DROP TABLE "family".data_aset;

CREATE TABLE "family".data_aset (
	id_data_aset serial NOT NULL,
	nama_aset varchar NULL,
	created_at timestamp(0) NOT NULL DEFAULT now()
);


-- "family".data_kepemilikan_aset definition

-- Drop table

-- DROP TABLE "family".data_kepemilikan_aset;

CREATE TABLE "family".data_kepemilikan_aset (
	id_data_kepemilikan_aset serial NOT NULL,
	id_data_keluarga int4 NULL,
	id_data_aset int4 NULL,
	jumlah int4 NULL,
	created_at timestamp(0) NOT NULL DEFAULT now()
);

-- "family".id_aset_keluarga_seq definition

-- DROP SEQUENCE "family".id_aset_keluarga_seq;

CREATE SEQUENCE "family".id_aset_keluarga_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;


-- "family".id_data_keluarga_seq definition

-- DROP SEQUENCE "family".id_data_keluarga_seq;

CREATE SEQUENCE "family".id_data_keluarga_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;


-- "family".id_data_kepemilikan_aset_seq definition

-- DROP SEQUENCE "family".id_data_kepemilikan_aset_seq;

CREATE SEQUENCE "family".id_data_kepemilikan_aset_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;


-- "family".id_data_aset_seq definition

-- DROP SEQUENCE "family".id_data_aset_seq;

CREATE SEQUENCE "family".id_data_aset_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;