<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AudioRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @apiResource(
 *      normalizationContext={"groups"={"audio:read"}},
 *      denormalizationContext={"groups"={"audio:write"}}
 * )
 *
 * @ORM\Entity(repositoryClass=AudioRepository::class)
 */
class Audio
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"audio:read", "audio:write"})
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="audio")
     * @ORM\JoinColumn(nullable=false)
     */
    private $boat;

    /**
     * @Groups({"audio:read", "audio:write", "boat:read"})
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"audio:read", "audio:write", "boat:read"})
     */
    private $file;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBoat(): ?Boat
    {
        return $this->boat;
    }

    public function setBoat(?Boat $boat): self
    {
        $this->boat = $boat;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(string $file): self
    {
        $this->file = $file;

        return $this;
    }
}
