<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TextRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @apiResource(
 *      normalizationContext={"groups"={"text:read"}},
 *      denormalizationContext={"groups"={"text:write"}}
 * )
 *
 * @ORM\Entity(repositoryClass=TextRepository::class)
 */
class Text
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"text:read", "text:write"})
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="texts")
     */
    private $boat;

    /**
     * @Groups({"text:read", "text:write", "boat:read"})
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @Groups({"text:read", "text:write", "boat:read"})
     * @ORM\Column(type="string", length=255)
     */
    private $testimony;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBoat(): ?boat
    {
        return $this->boat;
    }

    public function setBoat(?boat $boat): self
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

    public function getTestimony(): ?string
    {
        return $this->testimony;
    }

    public function setTestimony(string $testimony): self
    {
        $this->testimony = $testimony;

        return $this;
    }
}
